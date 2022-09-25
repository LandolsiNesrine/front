import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';
import { AngularMaterialModule } from 'src/app/module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsTableComponent } from './project-list/projects-table/projects-table.component';
import { ProjectsFiltreComponent } from './Project-list/projects-filtre/projects-filtre.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogueComponent } from './project-list/dialogue/dialogue.component';
import { DetailsDiaComponent } from './project-list/details-dia/details-dia.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectDeleteComponent } from './project-list/projects-table/project-delete/project-delete.component';
import { ProjectAddProjectComponent } from './project-add/project-add-project/project-add-project.component';
@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectsTableComponent,
    ProjectsFiltreComponent,
    DialogueComponent,
    DetailsDiaComponent,
    ProjectAddComponent,
    ProjectDeleteComponent,
    ProjectAddProjectComponent
  ],
  imports: [
    ProjectsRoutingModule,
    CommonModule,
    WidgetModule,
    UIModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule ,
    NgbTooltipModule,
    TranslateModule,
    AngularMaterialModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
  ]
})
export class ProjectsModule { }
