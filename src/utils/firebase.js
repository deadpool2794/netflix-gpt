// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyANJADKRWQw6FVhJi3lbzFJbhYDp1XUJqo',
    authDomain: 'netflix-gpt-4ff83.firebaseapp.com',
    projectId: 'netflix-gpt-4ff83',
    storageBucket: 'netflix-gpt-4ff83.firebasestorage.app',
    messagingSenderId: '291305124419',
    appId: '1:291305124419:web:4c0785b1b3c9f760fe1af6',
    measurementId: 'G-EY9K1HLQRX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
