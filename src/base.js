import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAnbadSowiHXWONwV7z2uSRoFB5TgRRT3g",
  authDomain: "chord-creator-62fd9.firebaseapp.com",
  databaseURL: "https://chord-creator-62fd9.firebaseio.com",
  projectId: "chord-creator-62fd9",
  storageBucket: "chord-creator-62fd9.appspot.com",
  messagingSenderId: "374734478526",
  appId: "1:374734478526:web:f6f7330116524beda312ef",
  measurementId: "G-MX10LN83RQ"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, base, facebookProvider }
