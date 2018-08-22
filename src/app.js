const movieDom = document.querySelector("input");

movieDom.addEventListener("keypress", (event) =>{
    let key = event.which || event.keyCode;
    if (key === 13){
        let movie = movieDom.value;
        movieDom.value = "";
        getData(movie);
    }
});