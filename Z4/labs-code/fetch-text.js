// Get HTML document
// Use “https://example.com” endpoint
// console log HTML document

const API_URL = "https://example.com";

function getHtml() {
  return fetch(API_URL).then((response) => response.text());
}

getHtml().then((html) => console.log(html));
