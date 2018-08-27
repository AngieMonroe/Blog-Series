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
    series.innerHTML += `
    <div class="col-6 col-md-3 mb-2">
    <div class="card-deck">
            <div class="card">
            <img class="card-img-top img" src=${image} alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data[i].Title}</h5>
            </div>
            <div class="card-footer">
            <small class="text-muted"><a href="#"><i class="fas fa-info-circle"></i>Más información
            </a></small>
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