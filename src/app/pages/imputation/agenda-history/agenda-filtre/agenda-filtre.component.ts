import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroupDirective } from "@angular/forms";

import { CriteriaSearch } from "src/app/shared/models";

@Component({
  selector: 'app-agenda-filtre',
  templateUrl: './agenda-filtre.component.html',
  styleUrls: ['./agenda-filtre.component.scss']
})
export class AgendaFiltreComponent implements OnInit {

  @Output() searchoptions = new EventEmitter<any>();
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  listProject: any[];
  disableSelect = new FormControl(false);

  constructor(
    private formBuilder: FormBuilder,

  ) {}

  ngOnInit(): void {}

  form = this.formBuilder.group({
    nameProject: this.formBuilder.control(null),
    refProject: this.formBuilder.control(null),
    endDate: this.formBuilder.control(null),

  });
  getFormControl(key: any) {
    return this.form.get(key) as FormControl;
  }
  reset() {
    this.form.reset();
    this.formDirective.resetForm();
    this.searchoptions.emit(null);
  }

  onSearch() {
    const searchvalue = [];

    if (this.form.value.refProject != null) {
      searchvalue.push(
        new CriteriaSearch("refProject", this.form.value.refProject, "equals")
      );
    }
    if (this.form.value.nameProject != null) {
      searchvalue.push(
        new CriteriaSearch("nameProject", this.form.value.nameProject,"equals")
      );
    }
    if (this.form.value.endDate != null) {
      searchvalue.push(
        new CriteriaSearch("endDate", this.form.value.endDate,"equals")
      );
    }


    this.searchoptions.emit(searchvalue);
  }
}
