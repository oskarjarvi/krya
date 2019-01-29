import { AsyncStorage } from 'react-native';
import jwtDecode from "jwt-decode";

let refreshTokenPromise = null;
let isRefreshingToken = false;
let isInitializing = false;

class TokenService {
  constructor() {
    this.oauth = {};
  }

  init = async () => {
    isInitializing = true;

    try {
      console.log('init start')
      const oauthString = await AsyncStorage.getItem('oauth');
      this.oauth = JSON.parse(oauthString);

      if (this.oauth && this.oauth.refresh_token) {
        await this.getToken('init');
        console.log('token init completed succefully')
        isInitializing = false;
        return jwtDecode(this.oauth.access_token);
      }
    } catch (error) {
      console.log("error3", error)
    }

    console.log('token init completed but token invalid. oauth is:', this.oauth)
    isInitializing = false;
    return false;
  }

  set = async (oauth) => {
    oauth.expires_at = Date.now() + oauth.expires_in * 1000;
    await AsyncStorage.setItem('oauth', JSON.stringify(oauth));
    this.oauth = oauth;
    return jwtDecode(this.oauth.access_token);
  }

  remove = async () => {
    this.oauth = {};
    await AsyncStorage.removeItem('oauth')
  }

  getToken = async (from) => {
    //console.log('trying to get token from ' + from, isRefreshingToken, isInitializing)

    if (isRefreshingToken || (isInitializing && from !== 'init')) {
      //console.log('Trying to get something while ' + (isRefreshingToken ? 'token is refreshed' : 'service is initializing') + ' PAUSING.')

      await Pause(100)

      //console.log('waited for a while, retrying')
      return this.getToken('retry')
    }

    if (!this.oauth.refresh_token) {
      //console.log('no token')
      isInitializing = true;
      await this.init()
    }

    // if now is after when the token expires (and 10s safety net)
    // try get new token with refresh_token
    if (Date.now() > (this.oauth.expires_at - 10000)) {
      //console.log("trying to refresh token from " + from)

      isRefreshingToken = true;
      refreshTokenPromise = await new Promise(async (resolve, reject) => { // <---------- await here???
        refreshTokenPromiseResolver = resolve;

        const data = {
          grant_type: 'refresh_token',
          ...this.oauth
        }

        const formData = Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

        const resp = await fetch('https://krya-websites.s1.umbraco.io/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Accept: 'application/json'
          },
          body: formData,
        });
        const respData = await resp.json();

        //console.log("token refresh response returned:" + resp.ok, resp.status, respData)

        if (resp.ok) {
          await this.set(respData)
          console.log('token has been refreshed')
        }
        else if (resp.status === 401) {
          console.warn("ERROR: refresh_token not valid", this.oauth)
          console.log(respData)
          await this.remove()
        }
        else {
          console.log('server error from refresh_token', resp, respData)
        }

        isRefreshingToken = false;
        resolve();
      });
    }

    //console.log('GETTING TOKEN from', from)
    return this.oauth.access_token;
  }
}

function Pause(length) {
  return new Promise(function (resolve) {
    setTimeout(resolve, length);
  });
}

export default new TokenService();