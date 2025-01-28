import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent} from './components/settings/settings.component';

export const routes: Routes = [
    { path: '', title: "Login", component: LoginComponent },
    { path: 'home', title: "Home", component: HomeComponent }, 
    { path: 'profile', title: "Profile", component: ProfileComponent }, 
    { path: 'settings', title: "Settings", component: SettingsComponent }, 
    { path: "**", component: PageNotFoundComponent },
];