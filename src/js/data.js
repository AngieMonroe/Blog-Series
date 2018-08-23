window.getData = (serie) => {
    fetch (`http://www.omdbapi.com/?s=${serie}&apikey=3356e4a4&type=series`)
    .then (response => response.json())
    .then (data => {
        console.log(data)
        renderInfo(data);
    })
    .catch(error => error)
   };

   // Inicia Firebase
   var config = {
    apiKey: "AIzaSyB8FTWdh7UdD_OKniOSspP5e2v1pHiAPhQ",
    authDomain: "blog-series.firebaseapp.com",
    databaseURL: "https://blog-series.firebaseio.com",
    projectId: "blog-series",
    storageBucket: "blog-series.appspot.com",
    messagingSenderId: "455950700692"
  };
  firebase.initializeApp(config);
    
    