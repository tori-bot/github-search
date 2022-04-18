import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'goals/:id', component: GoalDetailComponent },
  
  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
