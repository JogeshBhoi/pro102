
const firebaseConfig = {
  apiKey: "AIzaSyDKfDoUz0f49_ZB8E9n3KuaBgU1Zkv8iTk",
  authDomain: "letschat-97355.firebaseapp.com",
  projectId: "letschat-97355",
  storageBucket: "letschat-97355.appspot.com",
  messagingSenderId: "209647345753",
  appId: "1:209647345753:web:cdce4a67470dccfd865148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML}
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
)}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Kwitter_page.html";
}