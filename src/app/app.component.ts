import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
ngOnInit(){
  const config = {
    apiKey: "AIzaSyBV2f_1COu1XokN0zGKKNUqxAJbwfhwBFM",
    authDomain: "instagram-81d36.firebaseapp.com",
    databaseURL: "https://instagram-81d36.firebaseio.com",
    projectId: "instagram-81d36",
    storageBucket: "instagram-81d36.appspot.com",
    messagingSenderId: "440636823251"
  };
  firebase.initializeApp(config);
}
}
