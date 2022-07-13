import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective } from '@angular/forms';
import { AdmProfileService } from 'src/app';
import { CriteriaSearch } from 'src/app/shared/models';

@Component({
  selector: 'app-log-data-filtre',
  templateUrl: './log-data-filtre.component.html',
  styleUrls: ['./log-data-filtre.component.scss']
})
export class LogDataFiltreComponent implements OnInit {

  @Output() searchoptions = new EventEmitter<Partial<any>>();
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  listAdmProfile: any[];
  disableSelect = new FormControl(false);
  
  constructor(private formBuilder: FormBuilder, private admProfileService: AdmProfileService) { }

  ngOnInit(): void {
    this.initListAdmProfile();
  }

  form = this.formBuilder.group({
    idAdmProfile: this.formBuilder.control(null),
    fullName: this.formBuilder.control(null),
    dtBegin: this.formBuilder.control(null),
    dtLast: this.formBuilder.control(null),
  });

  getFormControl(key: any) {
    return this.form.get(key) as FormControl;
  }

  reset() {
    this.form.reset();
    this.formDirective.resetForm();
    this.searchoptions.emit(null)
  }

  onSearch() {
    const searchvalue = [];
    if (this.form.value.volume != null) {
      searchvalue.push(
        new CriteriaSearch(
          'idAdmProfile',
          this.form.value.idAdmProfile || undefined,
          '='
        ))
    }
  }

  public initListAdmProfile() {
    this.admProfileService.getListProfile().subscribe(
      response=> {
        if(response['code'] == '200') {
          this.listAdmProfile = response['payload'];
          console.log('show :: '+JSON.stringify(this.listAdmProfile));
        }
      },
      error => {

      }
    );
  }

}
