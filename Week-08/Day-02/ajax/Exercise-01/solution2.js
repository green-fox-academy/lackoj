let url = 'https://api.giphy.com/v1/stickers/search?api_key=6VT3WAW4gUpRwUV9UUdV4sTiNltrdin5&q=cats&limit=16&offset=0&rating=G&lang=en';

const sendHTTPRequest = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText).data);
        }
    }
    xhr.send();
};

sendHTTPRequest(url, 'GET', (response) => {
    console.log(response);

    let nav = document.querySelector('.thumbnail');

    response.forEach(e => {
        let newThumbnail = document.createElement('img');
        nav.appendChild(newThumbnail);
        newThumbnail.classList.add('thumbnails');
        newThumbnail.setAttribute('src', e.images.original_still.url);
        newThumbnail.onclick = () => {
            newThumbnail.setAttribute('src', e.images.original.url);
        };
    });
});