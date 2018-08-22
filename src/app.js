const movieDom = document.querySelector("input");
const btnBatman = document.getElementById('btn-batman');
const btnWoman = document.getElementById('btn-woman');
const btnRobin = document.getElementById('btn-robin');
const series = document.getElementById('serie');

movieDom.addEventListener("keypress", (event) =>{
    let key = event.which || event.keyCode;
    if (key === 13){
        let movie = movieDom.value;
        movieDom.value = "";
        getData(movie);
    }
});

btnBatman.addEventListener('click', (event) => {
    getData('Batman')
})

btnWoman.addEventListener('click', (event) => {
    getData('Wonder Woman')
})

btnRobin.addEventListener('click', (event) => {
    getData('Robin Hood')
})

const renderInfo = (data) => {
    serie.innerHTML = '';
    data = data.Search
    for(let i = 0; i < data.length; i++){
        series.innerHTML += `
        <img src=${data[i].Poster}>
        <p>${data[i].Title}</p>
        `
    }
}
