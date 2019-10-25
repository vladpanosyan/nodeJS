const btn = document.querySelector('.btn')
console.log(btn);

function toFetch(url, data = {}, method = "GET") {
    data = JSON.stringify(data);
    option = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data 
    }
    return fetch(url, option).then(result  => result.json())
}
btn.addEventListener('click', async () => {
    const rawResponse = await toFetch('users/', { a: 1, b: 'Textual content' }, "POST")
    console.log(rawResponse);
});
