import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase';
import {auth,aus} from 'firebase/auth';
import {app,database,User} from 'firebase/app';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
