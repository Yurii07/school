// Your web app's Firebase configuration
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBCKx-D1ZZNeAsRgkGyer5WX8gGIRcFWsw",
    authDomain: "list-contacts-267fd.firebaseapp.com",
    databaseURL: "https://list-contacts-267fd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "list-contacts-267fd",
    storageBucket: "list-contacts-267fd.appspot.com",
    messagingSenderId: "544886713649",
    appId: "1:544886713649:web:fb37c2a3073456a802d410"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();