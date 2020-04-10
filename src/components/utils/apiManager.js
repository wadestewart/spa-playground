export async function postData(params) {
    const response = await fetch(params.url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        // credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(params.data)
    })
    return response.json();
}
