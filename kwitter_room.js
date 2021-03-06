
 var firebaseConfig = {
    apiKey: "AIzaSyDUpCKBvPmqL75JkuqiESI5LEEe-NXGiiI",
    authDomain: "greetingbot-mbbf.firebaseapp.com",
    databaseURL: "https://greetingbot-mbbf-default-rtdb.firebaseio.com",
    projectId: "greetingbot-mbbf",
    storageBucket: "greetingbot-mbbf.appspot.com",
    messagingSenderId: "612205345152",
    appId: "1:612205345152:web:7cc8fdb50be16fb3c3e965",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Add(){
    user_name = document.getElementById("User_name").value;
  firebase.database().ref("/").child(user_name).update({purpose : "addinguser"});
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +user_name;
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
  localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room_name" + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  }
