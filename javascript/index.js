const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');

document.getElementById('date').innerHTML = myParam === null ? 'empty' : myParam;
