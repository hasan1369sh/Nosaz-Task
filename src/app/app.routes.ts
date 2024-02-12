import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { ShowGradeComponent } from './components/show-grade/show-grade.component';
import { UsersListComponent } from './components/usersList/usersList.component';
// import { deactivateGuard } from './guards/deactive.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'users',
    component: UsersListComponent,

    // canDeactivate: [deactivateGuard],
  },
  { path: 'grade/:id/:name', component: ShowGradeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id/:username', component: UserComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
