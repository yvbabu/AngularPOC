import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from "./http.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { DropDownDirective } from './drop-down.directive';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'firebase/auth'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    DropDownDirective,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
HttpModule,
RouterModule.forRoot([
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'about', component: AboutComponent},
{path: 'dashboard', component: DashboardComponent},
{path: ' ', component: LoginComponent, children: [
  {path: 'login', component: LoginComponent},
]},
{path: 'Register', component: RegisterComponent, children: [
  {path: 'Register', component: RegisterComponent},
]},
{path: 'contact', component: ContactComponent, children: [
{path: 'contact', component: ContactComponent},
  ], canActivate: [AuthGuard]},  
  ])
  ],
  providers: [AuthService, AuthGuard, HttpService],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
