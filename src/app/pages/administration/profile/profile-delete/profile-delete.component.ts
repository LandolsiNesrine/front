import { Component, OnInit,Inject, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdministrationService } from 'src/app/shared/service/administration/administration.service';
import { ProfileTableComponent } from '../profile-table/profile-table.component';
import { ProfileComponent } from '../profile.component';
data : ProfileComponent;
@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.scss']
})
export class ProfileDeleteComponent implements OnInit {
obj;
result;
data:ProfileComponent
@Output() msg = new EventEmitter<any>();
@Input() message:boolean=false;
@Input() set list(list: any[]) {

  if (list) {

    this.dataSource.data = list;

  }

}
dataSource = new MatTableDataSource<any>();
public totalCount: number = 0;
  private _list: any[];
  constructor(private dialog : MatDialog,private api: AdministrationService,public dialogRef:MatDialogRef<ProfileTableComponent>, @Inject(MAT_DIALOG_DATA) public dataa: any ) { 
    this.obj=dataa
  }

  ngOnInit(): void { }
  deteleProfile()
  {
   
    this.api.deleteprofile(this.obj.idAdmProfile).subscribe((response)=>{
      if (response["code"]=="200"){
        //this.message=true;
        console.log(this.message);
        //alert("Profil del !")
        console.log('success');
      }
      else {console.log("error1")
      //alert("erreur de del !")
    }
  (error)=>{

  }
    });
  }
}
