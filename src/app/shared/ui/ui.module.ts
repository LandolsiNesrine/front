import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { EmptyListComponent } from './list/empty-list/empty-list.component';

@NgModule({
  declarations: [PagetitleComponent, LoaderComponent, EmptyListComponent, PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    AngularMaterialModule,
    TranslateModule,
  ],
  exports: [PagetitleComponent, LoaderComponent, EmptyListComponent, PaginatorComponent]
})
export class UIModule { }
