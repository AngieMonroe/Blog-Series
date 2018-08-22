window.getData = (movie) => {
    fetch (`http://www.omdbapi.com/?s=${movie}&apikey=3356e4a4&type=series`)
    .then (response => response.json())
    .then (data => {
        console.log(data)
        renderInfo(data);
    })
    .catch(error => error)
   };