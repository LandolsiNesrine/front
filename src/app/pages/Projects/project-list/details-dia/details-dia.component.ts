import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectsTableComponent } from "../projects-table/projects-table.component";

@Component({
  selector: "app-details-dia",
  templateUrl: "./details-dia.component.html",
  styleUrls: ["./details-dia.component.scss"],
})
export class DetailsDiaComponent implements OnInit {

  obj;

  constructor(public dialogRef: MatDialogRef<ProjectsTableComponent>,
    @Inject(MAT_DIALOG_DATA)public data : any) {
      this.obj= data ;
      //console.log(data);
    }

  ngOnInit(): void {}
}
