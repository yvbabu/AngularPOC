import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
