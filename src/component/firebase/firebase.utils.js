import firebase from 'firebase/app';
import 'firebase/firestore'; // for database
import 'firebase/auth'; //for authentication
const config = {
  apiKey: 'AIzaSyDWY9O4IYeklbCOBwRPOTAiyA9sMcDQ28I',
  authDomain: 'crown-db-172f1.firebaseapp.com',
  projectId: 'crown-db-172f1',
  storageBucket: 'crown-db-172f1.appspot.com',
  messagingSenderId: '408943922865',
  appId: '1:408943922865:web:dc5fb3ec4fa9707f2d5c90',
  measurementId: 'G-3KYTFXF3DM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
