import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
images = '../assets/img_avatar2.png';
  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  }
  Applogout() {
    this.authService.logout();
  }
  
}
