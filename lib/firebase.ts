import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';



const  firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`
};

  

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//Auth

const firebaseSignInWithGoogle = () => (
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
)

const firebaseSignOut = () => auth.signOut();

const firebaseAddUser = (id, user) => firestore.collection('users').doc(id).set(user);

const firebaseGetUser = (id) => firestore.collection('users').doc(id).get();

 const addItems = (id, item) => firestore.collection('items').doc(id).set(item);

 const generateId = () => firestore.collection('items').doc().id;

const firebaseGetItems = () => firestore.collection('items').get();

const firebaseAddReview = (uid, review, item_id) => firestore.collection('users').doc(uid).collection('reviews').doc(item_id).set(review);


const firebaseGetReviews = () => firestore.collectionGroup('reviews').where('item_id', '==', '12').orderBy('createdAt', 'desc')

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  firebaseSignInWithGoogle, 
  generateId, 
  addItems, 
  firebaseSignOut, 
  firebaseAddUser, 
  firebaseGetUser,
  firebaseGetItems,
  firebaseAddReview,
  firebaseGetReviews
}


