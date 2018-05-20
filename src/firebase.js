import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDS9yB8c-IfUtDjuhzruohON3ILvcP6u_E",
    authDomain: "todo-19c25.firebaseapp.com",
    databaseURL: "https://todo-19c25.firebaseio.com",
    projectId: "todo-19c25",
    storageBucket: "todo-19c25.appspot.com",
    messagingSenderId: "831385744639"
};
firebase.initializeApp(config);

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()