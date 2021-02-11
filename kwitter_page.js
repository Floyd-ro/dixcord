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
  fuction send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes  
    });


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
