import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCC9Jw3QOBJQq_PpOyYL9XV1a7ZtHHh3gg",
  authDomain: "cooking-recipes-50e0c.firebaseapp.com",
  projectId: "cooking-recipes-50e0c",
  storageBucket: "cooking-recipes-50e0c.firebasestorage.app",
  messagingSenderId: "99226455655",
  appId: "1:99226455655:web:de8699fe8b80339e348ec2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }