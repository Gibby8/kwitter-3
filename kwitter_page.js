var firebaseConfig = {
    apiKey: "AIzaSyB7G3izGBg-ukT4wHreQNqfrlfirpGVctQ",
    authDomain: "kwitter-app-67c8c.firebaseapp.com",
    databaseURL: "https://kwitter-app-67c8c-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-67c8c",
    storageBucket: "kwitter-app-67c8c.appspot.com",
    messagingSenderId: "119596725444",
    appId: "1:119596725444:web:52106db2eb3f43180bc591"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}