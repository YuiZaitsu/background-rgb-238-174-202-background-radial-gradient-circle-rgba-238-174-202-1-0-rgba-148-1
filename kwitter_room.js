var firebaseConfig = {
      apiKey: "AIzaSyDZU4njV32S0mIRRwNJ7Yl5RaYrCin6LmU",
      authDomain: "kwitter-b947a.firebaseapp.com",
      databaseURL: "https://kwitter-b947a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b947a",
      storageBucket: "kwitter-b947a.appspot.com",
      messagingSenderId: "704644084789",
      appId: "1:704644084789:web:70e97e38cc0757a91f2d7c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
