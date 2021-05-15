import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "a4GckVJaoNcgNHViFp7Y",
    authDomain: "gtcys-task.appspot.com",
    databaseURL: "gs://gtcys-task.appspot.com/",
    projectId: "xxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxx"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;