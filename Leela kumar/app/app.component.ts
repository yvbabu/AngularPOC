import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'home';
  
  constructor(private authService: AuthService) { }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCZtGE5aNkXb6OV0quQEae39w66f5f2zRQ",
      authDomain: "iqpc-2470d.firebaseapp.com",
      databaseURL: "https://iqpc-2470d.firebaseio.com",
      projectId: "iqpc-2470d",
      storageBucket: "iqpc-2470d.appspot.com",
      messagingSenderId: "164510721207"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
