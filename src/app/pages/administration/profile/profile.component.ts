import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination, SearchObject } from 'src/app/shared/models';
import { AdministrationService } from 'src/app/shared/service';
import { PaginatorComponent } from 'src/app/shared/ui/paginator/paginator.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(PaginatorComponent) p: PaginatorComponent;
  delete: ProfileDeleteComponent;
  public data: any[] = [];
  public totalCount: number = 0;
  searchObject: SearchObject;
  msg:any;
  alert:boolean=false;
  breadCrumbItems: Array<{}>;

  public search = {
    'pagination': {
      "offSet": 0,
      "limit": 10
    },
    'sort': {
      "nameCol": "dateUpdate",
      "direction": "desc"
    },
    'dataSearch': null
  };

  constructor(private administrationService: AdministrationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("okk",this.loadData());
    this.loadData();
    
  }

  loadData() {
    this.administrationService.getListProfile()
      .subscribe(response => {
        if (response['code'] == '200') {
          this.data = response['payload'];
          this.totalCount = response['payload']['total'];
          console.log(this.data);
        } else {

        }
      }, error => {

      });
  }
  onPaginate(pagination: Pagination) {
    this.search = { ...this.search, pagination };
    this.loadData();
  }

  onSort(sort: any) {
    this.search = { ...this.search, sort };
    this.search.pagination.offSet = 0;
    this.p.paginator.pageIndex = 0;
    this.loadData();
  }

  onSearch($event: Partial<any>) {
    this.search.dataSearch = $event;
    this.search.pagination.offSet = 0;
    this.loadData();
    this.p.paginator.pageIndex = 0;
  }
  openDialog() {
    this.dialog.open(ProfileAddComponent, {
    width: '30%'

    }).afterClosed().subscribe(val=>{
      this.loadData();
      
     }); 
   }

   newalert(event: boolean) {

    this.alert = event;
  }

  closeAlert() {

    this.alert = false;

  }

   
  }