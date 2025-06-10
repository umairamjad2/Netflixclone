// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Await } from "react-router-dom";
import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHM-Gl2AbU1dxjvBVSb4fpeqLAC_L4FFY",
  authDomain: "netflix-clone-385af.firebaseapp.com",
  projectId: "netflix-clone-385af",
  storageBucket: "netflix-clone-385af.firebasestorage.app",
  messagingSenderId: "321041907862",
  appId: "1:321041907862:web:4916b5b1314ee1579382b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password)=>{
      try{
           const res = await createUserWithEmailAndPassword(auth , email , password);
           const user = res.user;
           await addDoc(collection(db,"user"),{
                  uid: user.uid,
                  name ,
                  authProvider : 'local',
                  email,
           })
      } catch(error){
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}

const login = async (email , password)=>{
      try{
            await signInWithEmailAndPassword(auth ,email , password)
      }catch(error){
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}

const logout = () =>{
      signOut(auth);
}

export {auth, db ,login ,signup,logout};