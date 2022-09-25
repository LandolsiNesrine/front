import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AdministrationRoutingModule } from './administration-routing.module';
import { LogDataComponent } from './log-data/log-data.component';
import { LogDataFiltreComponent } from './log-data/log-data-filtre/log-data-filtre.component';
import { LogDataTableComponent } from './log-data/log-data-table/log-data-table.component';
import { LogAccessComponent } from './log-access/log-access.component';
import { LogAccessFiltreComponent } from './log-access/log-access-filtre/log-access-filtre.component';
import { LogAccessTableComponent } from './log-access/log-access-table/log-access-table.component';
import { UsersComponent } from './users/users.component';
import { UsersFiltreComponent } from './users/users-filtre/users-filtre.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersDeleteComponent } from './users/users-delete/users-delete.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { AngularMaterialModule } from 'src/app/module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFiltreComponent } from './profile/profile-filtre/profile-filtre.component';
import { ProfileTableComponent } from './profile/profile-table/profile-table.component';
import { ProfileAddComponent } from './profile/profile-add/profile-add.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileDeleteComponent } from './profile/profile-delete/profile-delete.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { LogDataProfileComponent } from './log-data-profile/log-data-profile.component';


@NgModule({
  declarations: [
    LogDataComponent,
    LogDataFiltreComponent,
    LogDataTableComponent,
    LogAccessComponent,
    LogAccessFiltreComponent,
    LogAccessTableComponent,
    UsersComponent,
    UsersFiltreComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersDeleteComponent,
    UsersTableComponent,
    ProfileComponent,
    ProfileFiltreComponent,
    ProfileTableComponent,
    ProfileAddComponent,
    ProfileEditComponent,
    ProfileDeleteComponent,
    LogDataProfileComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    AngularMaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class AdministrationModule { }
