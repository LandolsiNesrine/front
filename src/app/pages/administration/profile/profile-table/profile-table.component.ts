import {  EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination, SearchObject } from 'src/app/shared/models';
import { AdministrationService } from 'src/app/shared/service';
import { PaginatorComponent } from 'src/app/shared/ui/paginator/paginator.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProfileAddComponent } from '../profile-add/profile-add.component';
import { ProfileComponent } from '../profile.component';
import { ProfileDeleteComponent } from '../profile-delete/profile-delete.component';
import { NgbModule }
from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent implements OnInit {
  data:ProfileComponent
  public totalCount: number = 0;
  @Output() sort = new EventEmitter<any>();
  @Output() msg =new EventEmitter<boolean>();
  @Input() set list(list: any[]) {
    if (list) {
      this.dataSource.data = list;
    }
  }

  dataSource = new MatTableDataSource<any>();
  private _list: any[];

  displayedColumns: string[] = ['codeAdmProfile', 'libelleAdmProfile', 'role', 'libelleAdmProfileAr','libelleAdmProfileEn', 'dateCreation','CRUD'];
  constructor(private dialog: MatDialog, private api : AdministrationService) { }


  ngOnInit(): void {  
}

  ngAfterViewInit(): void { }

 

  getCol() {
      return this.displayedColumns;
  
  }

  onSortChange($event: any) {
    this.sort.emit({
      nameCol: $event.active as any,
      direction: $event.direction.toUpperCase() as any,
    });
  }

  get list(): any[] {
    return this._list;
  }
  editProfile(obj)
  {
    this.dialog.open(ProfileAddComponent, {
      width: '30%',
      data: obj
    }).afterClosed().subscribe(val=>{
      this.refresh();
    })
  }

  openDialog() {
    this.dialog.open(ProfileAddComponent, {
    width: '30%'

    }).afterClosed().subscribe(res=>{
      if(res){
        this.refresh();
    }});
  }
  openConfirmDialog(obj)
  {
    this.dialog.open(ProfileDeleteComponent, {
      width: '30%',
      data:obj,
      disableClose:true,
     
      }).afterClosed().subscribe((res)=>{
        if(res){
          this.refresh();
          this.addalert(res);
      }});
  }
  refresh() {
    this.api.getListProfile()
      .subscribe(response => {
        if (response['code'] == '200') {
          this.dataSource.data = response['payload'];
          this.totalCount = response['payload']['total'];
          console.log(this.data);
        } else {
          
        }
      }, error => {

      });
  }
  addalert(value){
    this.msg.emit(value);
  }
}
  



