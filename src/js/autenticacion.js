const emailUser = document.getElementById('email');
const passwordUser = document.getElementById('password');
const btnEnter = document.getElementById('enter');
const nameRegistry = document.getElementById('orangeForm-name');
const emailRegistry = document.getElementById('orangeForm-email');
const passRegistry = document.getElementById('orangeForm-pass');
const btnRegistry = document.getElementById('btn-Registry');
const btnGoogle = document.getElementById('google');
const btnFacebook = document.getElementById('facebook');

// Registro de usuario
/* Cuando es un usuario nuevo es necesario realizar la captura de información
dentro de esta función se llama a la función que nos ayudará actualizar la
información del perfil */

btnRegistry.addEventListener('click', (event) => {
  let email = emailRegistry.value;
  let password = passRegistry.value;
  let name = nameRegistry.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      check();  
      alert('Bienvenido a la mejor comunidad de Series');
      window.location.assign('../views/Index.html');
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = 'Revisa la información';
      console.log(errorCode);
      alert(errorMessage);
    });
  nameDisplay(name);
});

// Ingresa el usuario
/* Cuando el usuario ya ha hecho su registro anteriormente solo debe ingresar su
correo y contraseña */

btnEnter.addEventListener('click', (event) =>{
  event.preventDefault();
  let email = emailUser.value;
  let password = passwordUser.value;
     
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      window.location.assign('../views/Home.html');
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = 'Escribe un usuario o contraseña validos';
      console.log(errorCode);
      alert(errorMessage);
    });
});

// Verifica el usuario 
/* Por medio de esta función se verifica el estado del usuario para saber si 
existe un registro de este en la base de datos de firebase */
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('existe usuario');
    window.location.assign('../views/Home.html');
  } else {
    console.log('no existe usuario');
  }
});

const check = () => {
  let user = firebase.auth().currentUser; 
  user.sendEmailVerification().then(function() {
    
  }).catch(function(error) {
    console.log(error);
  });
};

// Función guardar nombre en currentUser.displayName
const nameDisplay = (name) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user !== null) {
      user.updateProfile({
        displayName: name
      });
    }
  });
};