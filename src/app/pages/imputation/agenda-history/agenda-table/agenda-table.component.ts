import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { AgednaService } from "src/app/shared/service/agenda/agenda.service";
import { AgendaDeleteComponent } from "./agenda-delete/agenda-delete.component";
import { AgendaDetailsComponent } from "./agenda-details/agenda-details.component";
@Component({
  selector: "app-agenda-table",
  templateUrl: "./agenda-table.component.html",
  styleUrls: ["./agenda-table.component.scss"],
})
export class AgendaTableComponent implements OnInit {
  @Output() sort = new EventEmitter<any>();
  @Output() alertbo = new EventEmitter<boolean>();
  @Input()
  set list(list: any[]) {
    if (list) {
      this.dataSource.data = list;
    }
  }
  public totalCount: number = 0;
  dataSource = new MatTableDataSource<any>();
  alert: boolean = false;
  private _list: any[];
  displayedColumns: string[] = [
    "refProject",
    "nameProject",
    "jour",
    "heure_debut",
    "heure_fin",
    "nbh",
    "tache",
    "commentaire",
    "actions",
  ];
  constructor(public dialog: MatDialog, public agendaService: AgednaService) {}

  ngOnInit(): void {}
  addalert(value: boolean) {
    this.alertbo.emit(value);
  }

  getlist(): any[] {
    console.log(this.dataSource.data);
    return this.dataSource.data;
  }
  getCol() {
    return this.displayedColumns;
  }
  openDialog(obj) {}
  opendetails(obj) {
    this.dialog
      .open(AgendaDetailsComponent, {
        width: "40%",
        disableClose: true,
        data: {
          code: obj.code,
          nameProject: obj.nameProject,
          refProject: obj.refProject,
          jour: obj.jour,
          heure_debut: obj.heure_debut,
          heure_fin: obj.heure_fin,
          nbh: obj.nbh,
          tache: obj.tache,
          commentaire: obj.commentaire,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log("Dialog Res", result);
        this.addalert(result);
        this.refresh();
      });
  }

  opendelete(obj) {
    this.dialog
      .open(AgendaDeleteComponent, {
        width: "400px",
        disableClose: true,
        data: {
          code: obj.code,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        console.log("Dialog Res", result);
        this.addalert(result);
        this.refresh();
      });
  }

  refresh() {
    this.agendaService
      .getagendaByUsername(/*this.setUsername()*/ "admin")
      .subscribe(
        (response) => {
          if (response["code"] == "200") {
            this.dataSource.data = response["payload"];

            this.totalCount = response["payload"]["total"];
            //         console.log(this.data);
            //       console.log(response['code']);
          } else {
            console.log("error");
          }
        },
        (error) => {
          console.log("error");
        }
      );
  }
}
