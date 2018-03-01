import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {database} from 'firebase/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      Response => {
      this.router.navigate(['login']);
    }
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('Password should be at least 6 characters.');
      } if (errorCode === 'auth/invalid-email') {
        alert('Invalid email.');
      }
      console.log(error);
    });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email' || email === '') {
          alert('Wrong email.');
        }
        console.log(error);
      });
    }

  SNUser() {
    return firebase.auth().currentUser.email;
      }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['']);
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }


  additems(userId: string, itnames: string, price: string) {
     var database = firebase.database();
     function itname(itname, price) {
      database.ref('itname/').set({
        itnames : itnames,
        price : price,
       // profile_picture : imageUrl
      });
    }
console.log(Error);      
  }

  isAuthenticated() {
    return this.token != null;
  }
  
}
