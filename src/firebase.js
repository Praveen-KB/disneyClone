/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// import { getAnalytics } from "firebase/analytics";
// const firebase = require("firebase");

const firebaseConfig = {
  apiKey: 'AIzaSyD2b1TAOAMBwpZ0rVjU1dcgAbQIswS6vSE',
  authDomain: 'disneyclone-4f55d.firebaseapp.com',
  projectId: 'disneyclone-4f55d',
  storageBucket: 'disneyclone-4f55d.appspot.com',
  messagingSenderId: '290576183842',
  appId: '1:290576183842:web:4c47a25b72f4107332507b',
  measurementId: 'G-RP8Q4VM1GD',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage()

export {auth, provider, storage}
export default db
