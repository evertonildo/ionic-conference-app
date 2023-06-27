import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Md5 } from 'ts-md5';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv73rPZ_4R2vD6-Sn7i3uBm3fhiJsguMY",
  authDomain: "custo-efetivo-b10c6.firebaseapp.com",
  projectId: "custo-efetivo-b10c6",
  storageBucket: "custo-efetivo-b10c6.appspot.com",
  messagingSenderId: "678903077514",
  appId: "1:678903077514:web:992c51ca1690d357446b73",
  measurementId: "G-5QFGPEJ087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  public addUser(email: string, password: string, name: string = '', cpf: string = '') {
    try {
      return addDoc(collection(db, "users"), {
        name: name,
        password: Md5.hashStr(password).toString(),
        email: email,
        cpf: cpf,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(result => {
        console.log('addUser', result.id);
        return result;
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  }
}
