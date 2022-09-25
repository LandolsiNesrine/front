import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatGridListModule} from '@angular/material/grid-list';
import { TranslateModule } from '@ngx-translate/core';
import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';
import { AgendaGridComponent } from './agenda-grid/agenda-grid.component';
import { AngularMaterialModule } from 'src/app/module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AgendaAddComponent } from './agenda-grid/agenda-add/agenda-add.component';
import { AgendaHistoryComponent } from './agenda-history/agenda-history.component';
import { AgendaFiltreComponent } from './agenda-history/agenda-filtre/agenda-filtre.component';
import { AgendaTableComponent } from './agenda-history/agenda-table/agenda-table.component';
import { AgendaDeleteComponent } from './agenda-history/agenda-table/agenda-delete/agenda-delete.component';
import { AgendaDetailsComponent } from './agenda-history/agenda-table/agenda-details/agenda-details.component';
import { AgendaUpdateComponent } from './agenda-history/agenda-table/agenda-update/agenda-update.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AgendaGridComponent,
    AgendaAddComponent,
    AgendaHistoryComponent,
    AgendaFiltreComponent,
    AgendaTableComponent,
    AgendaDeleteComponent,
    AgendaDetailsComponent,
    AgendaUpdateComponent

  ],
  imports: [
    AgendaRoutingModule,
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
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatDividerModule,
    MatListModule,

  ]
})
export class AgendaModule { }
