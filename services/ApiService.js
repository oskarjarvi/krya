import TokenService from './TokenService_js';

export async function getData(endpoint) 
{
    const access_token = await TokenService.getToken()

    return fetch(`https://krya-websites.s1.umbraco.io/umbraco/api/${endpoint}`,
    {
        method: 'GET',
        headers:
        {
            'Authorization': "Bearer " + access_token,
        },
    })
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
}
export async function postData(endpoint, data) 
{
    const access_token = await TokenService.getToken()
    
    const rawResponse = await fetch(`https://krya-websites.s1.umbraco.io/umbraco/api/Post/${endpoint}`,
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
            'Authorization': "Bearer " + access_token,
        },
        body: JSON.stringify(data)
    })
    
    const content = await rawResponse.json();
    console.log(content)
    
    
    
}
