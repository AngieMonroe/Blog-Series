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
        <!-- Button trigger modal -->
        <a type="button" data-toggle="modal" data-target="#${data[i].imdbID}"> <img src=${data[i].Poster}>
        </a>
        <p>${data[i].Title}
          
          <!-- Modal -->
          <div class="modal fade" id="${data[i].imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">${data[i].Title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>${data[i].Type}</p>
                  <p>${data[i].Year}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        `;
    }
}
