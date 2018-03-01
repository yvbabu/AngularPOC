import { Injectable } from '@angular/core';
import { ErrorHandler} from '@angular/core';

@Injectable()
export class MyhandlerService implements ErrorHandler {

  constructor() { }
 
handleError(error : any){ //default method that catches errors in ErrorHandler class
  alert('Hi'); //test that overridden method is working
 // our custom code to handle different types of exceptions.
  // IMPORTANT: uncomment the below to rethrow the error. it wil then be displayed in console. otherwise it gets swallowed.
   //  throw error;
  }

}
