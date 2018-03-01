import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandler} from '@angular/core';
import { AppComponent } from './app.component';
import { MyhandlerService } from './myhandler.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [{provide: ErrorHandler, useClass: MyhandlerService}], // to tell angular to use MyhandlerService class instead of default ErrorHandler class during DI 
  bootstrap: [AppComponent]
})
export class AppModule { }
