import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './log-in/log-in.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'log-in', component: LoginComponent},
  {path: 'logged-in', component: LoggedInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
