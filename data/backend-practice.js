const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  xhr.response
  console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
