import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBHJ44K3rz8bZS9QhjNvFkw9jnOdWpXL94",
  authDomain: "slack-74f50.firebaseapp.com",
  projectId: "slack-74f50",
  storageBucket: "slack-74f50.appspot.com",
  messagingSenderId: "830015296637",
  appId: "1:830015296637:web:87498bc7953d8686e1cd14"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };