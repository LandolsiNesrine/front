import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogAccessComponent } from './log-access/log-access.component';
import { LogDataComponent } from './log-data/log-data.component';
import { ProfileAddComponent } from './profile/profile-add/profile-add.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'logData', component: LogDataComponent },
    { path: 'accessData', component: LogAccessComponent },
    {
      path: 'profile', component: ProfileComponent,
      children: [
        { path: 'add', component: ProfileAddComponent },
        { path: 'edit/:id', component: ProfileEditComponent },
      ]
    },
    {
      path: 'users', component: UsersComponent,
      children: [
        { path: 'add', component: UsersAddComponent },
        { path: 'edit/:id', component: UsersEditComponent },
      ]
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
