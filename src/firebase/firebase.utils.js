import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRWDrASG8jc7ur6EYmLcTdPneIO9s6yF0",
    authDomain: "csk-clothing-db.firebaseapp.com",
    projectId: "csk-clothing-db",
    storageBucket: "csk-clothing-db.appspot.com",
    messagingSenderId: "366464293647",
    appId: "1:366464293647:web:b81cf29aae8f1b1e3abc7a",
    measurementId: "G-GVELWTW8HY"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,email,createdAt,...additionalData
            });
        }
        catch(error){
            console.log("Error creating user", error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase; 