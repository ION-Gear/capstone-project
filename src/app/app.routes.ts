import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', title: "Login", component: LoginComponent },
    { path: 'Home', title: "Home", component: HomeComponent },   
    { path: "**", component: PageNotFoundComponent },
];
