const movieDom = document.getElementById('movie');
const btnBatman = document.getElementById('btn-batman');
const btnWoman = document.getElementById('btn-woman');
const btnRobin = document.getElementById('btn-robin');
const series = document.getElementById('serie');
const btnSignOut = document.getElementById('btn-SingOut');
const userPrintHome = document.getElementById('user');

// Verifica el usuario 
/* Función de firebase que nos ayuda a observar el estado de un usuario */
const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user !== null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;
      photoUrl = user.photoUrl;
      console.log('existe usuario');
      userPrint(user);
    } else {
      console.log('no existe usuario');
    }
  });
};
observer();

// Función que pinta nombre de usuario
const userPrint = (user) => {
  if (user) {
    userPrintHome.innerHTML = `<strong>For </strong>${user.displayName}`;
  }
};

// Función que nos permite buscar alguna serie en particular
movieDom.addEventListener('keypress', (event) =>{
  let key = event.which || event.keyCode;
  if (key === 13) {
    let movie = movieDom.value;
    movieDom.value = '';
    getData(movie);
  }
});

btnBatman.addEventListener('click', (event) => {
  getData('Batman');
});

btnWoman.addEventListener('click', (event) => {
  getData('Wonder Woman');
});

btnRobin.addEventListener('click', (event) => {
  getData('Robin Hood');
});

const renderInfo = (data) => {
  serie.innerHTML = '';
  data = data.Search;
  let image;
  for (let i = 0; i < data.length; i++) {
    if (data[i].Poster !== 'N/A') {
      image = data[i].Poster;
    } else {
      image = '../css/image/noDisponible.png';
    }
    console.log(image);
    series.innerHTML += `
        <!-- Button trigger modal -->
        <a type="button" data-toggle="modal" data-target="#${data[i].imdbID}"> <img src=${image}>
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
};

// Cerrar sesión  
btnSignOut.addEventListener('click', (event) => {
  firebase.auth().signOut()
    .then(function() {
      console.log('Saliendo...');
      window.location.assign('../views/Index.html');
    })
    .catch(function(error) {
      console.log(error);
    });
});