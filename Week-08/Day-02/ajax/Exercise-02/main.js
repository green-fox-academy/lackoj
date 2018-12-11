"use strict";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=324a472f04c94c618e7702cca1e7cc5c&q=moon&landing&by&Apollo&11";

const sendHTTPRequest = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
};

sendHTTPRequest(url, 'GET', (response) => {
    console.log(response);
    const htmlbody = document.querySelector('body');

    response.response.docs.forEach(e => {
        const article = document.createElement('article');
        const header = document.createElement('header');
        header.innerText = e.headline.print_headline;

        const snippet = document.createElement('p');
        snippet.innerText = e.snippet;

        const pubdate = document.createElement('div');
        pubdate.innerText = e.pub_date;

        const permaurl = document.createElement('a');
        permaurl.href = e.web_url;
        permaurl.innerText = 'read entire article here';
        permaurl.target = '_blank';
        article.appendChild(header);
        article.appendChild(snippet);
        article.appendChild(pubdate);
        article.appendChild(permaurl);
        htmlbody.appendChild(article);
    });
});
