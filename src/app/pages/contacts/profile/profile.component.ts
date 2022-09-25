import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { revenueBarChart, statData } from './data';

import { ChartType } from './profile.model';
import { AccountService } from 'src/app/shared';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']

})

/**
 * Contacts-profile component
 */
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  revenueBarChart: ChartType;
  statData;
  UserData: FormGroup;
  data:ProfileComponent;
  public totalCount: number = 0;
  @Output() sort = new EventEmitter<any>();
  @Input() set list(list: any[]) {
    if (list) {
      this.dataSource.data = list;
    }
  }
  dataSource = new MatTableDataSource<any>();
  private _list: any[];
  public dat;
  public datt:any[]=[];
  
  displayedColumns: string[] = ['fullName','libelleAdmProfile','email','num_phone'];
  constructor( public accountservice: AccountService,private formBuilder : FormBuilder,
   ) { 
    
  }

  ngOnInit(): void {

    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'Profile', active: true }];
    this.loadData();
    this.loadProjects();
    //console.log("yes");
    //console.log(this.UserData)
    // fetches the data
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
    
  }
  loadData() {
    this.accountservice.whoiam()
      .subscribe(response => {
        if (response['code'] == '200') {
          this.dat = response['payload'];
          this.totalCount = response['payload']['total'];
          console.log(this.dat);
        } else {
  
        }
      }, error => {
  
      });
  }

  loadProjects() {
  
    this.accountservice.myProjects()
      .subscribe((projects:any) => {
        console.log(projects);   
        this.datt=projects; 
      }, error => {
  
      });
  }
  
}
