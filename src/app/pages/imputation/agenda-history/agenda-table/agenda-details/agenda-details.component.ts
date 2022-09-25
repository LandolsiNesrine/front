import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AgendaTableComponent } from "../agenda-table.component";

@Component({
  selector: 'app-agenda-details',
  templateUrl: './agenda-details.component.html',
  styleUrls: ['./agenda-details.component.scss']
})
export class AgendaDetailsComponent implements OnInit {
  obj;
  constructor(public dialogRef: MatDialogRef<AgendaTableComponent>,
    @Inject(MAT_DIALOG_DATA)public data : any) {
      this.obj= data ;
      //console.log(data);
    }


  ngOnInit(): void {
  }

}
