import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyA8h89JIpse6d9MLrCCNZcMPeMIqZfnhNk",
  authDomain: "bartersystemapp-19984.firebaseapp.com",
  projectId: "bartersystemapp-19984",
  storageBucket: "bartersystemapp-19984.appspot.com",
  messagingSenderId: "448370106070",
  appId: "1:448370106070:web:20a62479a3d125c1d07377"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()