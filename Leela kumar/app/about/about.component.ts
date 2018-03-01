import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
