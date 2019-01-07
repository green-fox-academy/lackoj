'use strics';

const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    };
  };
  xhr.send();
};

