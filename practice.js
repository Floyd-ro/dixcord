var firebaseConfig = {
    apiKey: "AIzaSyBWulIJrKwDXUuO6ATdq2ScYYC5IpztcDw",
    authDomain: "kwitter-a74c4.firebaseapp.com",
    databaseURL: "https://kwitter-a74c4-default-rtdb.firebaseio.com",
    projectId: "kwitter-a74c4",
    storageBucket: "kwitter-a74c4.appspot.com",
    messagingSenderId: "837071064783",
    appId: "1:837071064783:web:b06b0e5cfd130f44ac31ba",
    measurementId: "G-GBBJ4KRW08"
  };


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}