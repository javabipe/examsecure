import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCg2Rl7gO_CASG-0Ml6rjsRcAWkPoII6s8',
  authDomain: 'algar-1616501032135.firebaseapp.com',
  projectId: 'algar-1616501032135',
  storageBucket: 'project2-e6924.appspot.com',
  messagingSenderId: '361613734874',
  appId: '1:361613734874:web:40d4f4f1d7cb4a04fa86e3',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;
