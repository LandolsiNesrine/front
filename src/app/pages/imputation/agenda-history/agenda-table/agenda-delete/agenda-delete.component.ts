import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgendaTableComponent } from '../agenda-table.component';
import { AgednaService } from 'src/app/shared/service/agenda/agenda.service';

@Component({
  selector: 'app-agenda-delete',
  templateUrl: './agenda-delete.component.html',
  styleUrls: ['./agenda-delete.component.scss']
})
export class AgendaDeleteComponent implements OnInit {
obj;

constructor(
  private agendaService: AgednaService,
  public dialogRef: MatDialogRef<AgendaTableComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {
  this.obj = data;
  //console.log(data);
}

  ngOnInit(): void {
  }
  delete() {
    this.agendaService
      .deleteAgenda(this.obj.code)
      .subscribe((response) => {
        if (response["code"] == "200") {
        } else {
          alert("Erreur inetrne de systeme ");
        }
      });
  }

}
