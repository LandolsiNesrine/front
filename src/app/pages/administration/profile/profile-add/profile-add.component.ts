import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { timestamp } from 'rxjs/operators';
import { AdministrationService } from 'src/app/shared';
import { ProfileTableComponent } from '../profile-table/profile-table.component';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnInit {
profileForm !: FormGroup;
actionBtn : string ="Save";
obj;
typealert = "alert alert-success "
data:ProfileComponent
alert:boolean=false;
msg:string;
@Output() sort = new EventEmitter<any>();

@Input() set list(list: any[]) {

  if (list) {

    this.dataSource.data = list;

  }

}
dataSource = new MatTableDataSource<any>();
public totalCount: number = 0;
  private _list: any[];
  constructor(private FormBuilder : FormBuilder , private api: AdministrationService,public dialogRef:MatDialogRef<ProfileTableComponent>,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    ) { }
  ngOnInit(): void {
      this.profileForm = this.FormBuilder.group({
      idAdmProfile: [''],
      codeAdmProfile : ['',Validators.required],
      dateCreation:['',Validators.required],
      dateUpdate:['',Validators.required],
      libelleAdmProfile : ['',Validators.required],
      role : ['',Validators.required],
      libelleAdmProfileAr : ['',Validators.required],
      libelleAdmProfileEn : ['',Validators.required],
    });
    console.log(this.editData);
    if(this.editData)
    {
      console.log(this.editData);
      this.actionBtn="Update";
      this.profileForm.controls['idAdmProfile'].setValue(this.editData.idAdmProfile);
      this.profileForm.controls['codeAdmProfile'].setValue(this.editData.codeAdmProfile);
      this.profileForm.controls['dateCreation'].setValue(this.editData.dateCreation);
      this.profileForm.controls['dateUpdate'].setValue(this.editData.dateUpdate);
      this.profileForm.controls['libelleAdmProfile'].setValue(this.editData.libelleAdmProfile);
      this.profileForm.controls['role'].setValue(this.editData.role);
      this.profileForm.controls['libelleAdmProfileAr'].setValue(this.editData.libelleAdmProfileAr);
      this.profileForm.controls['libelleAdmProfileEn'].setValue(this.editData.libelleAdmProfileEn);
    }
  }
 
addProfil(){
 if(!this.editData){
  console.log(this.profileForm.value);
  this.api.pushProfile(this.profileForm.value)
  .subscribe(
    (response)=>{
      
      if (response["code"]=="200"){
        //alert("Profil ajouté !")
        this.alert=true;
        this.msg="Profil ajouté avec succès"
        console.log( this.alert)
        console.log('success');
        console.log(this.profileForm.value);
        this.profileForm.reset();
        //this.dialogRef.close();
      }
      else {console.log("error1")
      alert("erreur d'ajout1 !")}
      

    },
    (error)=>{
      this.msg="Erreur d'ajout !"
      this.typealert="alert alert-danger"
      console.log("error");
      alert("erreur d'ajout !")

    }
  );
 }
 else
{
  this.updateProfil();
}
}
updateProfil()
{
  this.api.putProfile(this.profileForm.value)
  .subscribe(
    (response)=>{
      this.msg="Profil mis à jour avec succès"
      this.alert=true;
      if (response["code"]=="200"){
       // alert("Profil maj !")
        console.log('success');
        //this.dialogRef.close();
      }
      else {console.log("error1")
      alert("erreur de maj !")}
      

    },
    (error)=>{
      this.msg="Erreur de mise à jour !"
      console.log("error");
      this.typealert = "alert alert-success "
      alert("erreur de maj1 !")

    }
  );
}

closeAlert() {

  this.alert = false;

}
}
