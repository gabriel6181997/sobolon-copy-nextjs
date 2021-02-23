import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBR8YTwdKL8gUuctacEx55UfzD_Pjd-row",
  authDomain: "sobolon-form-data.firebaseapp.com",
  databaseURL: "https://sobolon-form-data-default-rtdb.firebaseio.com/",
  projectId: "sobolon-form-data",
  storageBucket: "sobolon-form-data.appspot.com",
  messagingSenderId: "649921328552",
  appId: "1:649921328552:web:85fe81d976a5be54ac599d",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const formdataRef = database.ref('formdata');
