import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor() {  }
 
  Errortestor{      //simple method that throws an error so that we can test
throw new Error('Im errorn');
  }
}
