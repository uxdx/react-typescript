import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import secrets from "./secrets";

const firebaseConfig = secrets;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signIn(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function getUser(){
  const user = auth.currentUser;
  if (user !== null) {
    return user;
  // // The user object has basic properties such as display name, email, etc.
  // const displayName = user.displayName;
  // const email = user.email;
  // const photoURL = user.photoURL;
  // const emailVerified = user.emailVerified;

  // // The user's ID, unique to the Firebase project. Do NOT use
  // // this value to authenticate with your backend server, if
  // // you have one. Use User.getToken() instead.
  // const uid = user.uid;
  }
  return null;
}
export {signIn, getUser};