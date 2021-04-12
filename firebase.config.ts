import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAhi7uGkRT7hFKBr2OtmPzKVobB7VcxfQ",
    authDomain: "vue-todo-list-55ee8.firebaseapp.com",
    projectId: "vue-todo-list-55ee8",
    storageBucket: "vue-todo-list-55ee8.appspot.com",
    messagingSenderId: "623143710677",
    appId: "1:623143710677:web:966ba9194200335625175c",
    measurementId: "G-9DYGV08ZC4"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()