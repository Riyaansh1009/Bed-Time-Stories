import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyAeiS6KbUJDZNE5PS-3BUSauz2OepXbo3c",
  authDomain: "bed-time-stories-bb413.firebaseapp.com",
  projectId: "bed-time-stories-bb413",
  storageBucket: "bed-time-stories-bb413.appspot.com",
  messagingSenderId: "25203522378",
  appId: "1:25203522378:web:b8f87b4a5815bce293dfb3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
