import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { DialogueComponent } from "../dialogue/dialogue.component";
import { DetailsDiaComponent } from "../details-dia/details-dia.component";
import { ProjectService } from "src/app/shared/service/project/project.service";
import { ProjectDeleteComponent } from "./project-delete/project-delete.component";

@Component({
  selector: "app-projects-table",
  templateUrl: "./projects-table.component.html",
  styleUrls: ["./projects-table.component.scss"],
})
export class ProjectsTableComponent implements OnInit {
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
    "startDate",
    "endDate",
    "nbh",
    "price",
    "cost",
    "state",
    "actions",
  ];

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }
  ngAfterViewInit(): void {
    this.getlist();
  }
  onSortChange($event: any) {
    this.sort.emit({
      nameCol: $event.active as any,
      direction: $event.direction.toUpperCase() as any,
    });
  }

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

  printVal(obj) {
    console.log("obj", obj);
  }

  openDialog(obj) {
    this.dialog
      .open(DialogueComponent, {
        width: "35%",
        data: {
          nameProject: obj.nameProject,
          refProject: obj.refProject,
          codeProject: obj.codeProject,
          cost: obj.cost,
          price: obj.price,
          startDate: obj.startDate,
          endDate: obj.endDate,
          state: obj.state,
        },
      })
      .afterClosed()
      .subscribe((val) => {
        this.refresh();
      });
  }
  opendetails(obj) {
    const dialogRef = this.dialog.open(DetailsDiaComponent, {
      width: "40%",
      data: {
        nameProject: obj.nameProject,
        codeProject: obj.codeProject,
        refProject: obj.refProject,
        cost: obj.cost,
        price: obj.price,
        startDate: obj.startDate,
        endDate: obj.endDate,
        state: obj.state,
        nbht: obj.nbht,
      },
    });
  }
  opendelete(obj) {
    this.dialog
      .open(ProjectDeleteComponent, {
        width: "400px",
        disableClose: true,
        data: {
          codeProject: obj.codeProject,
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
    this.projectService.getListProject().subscribe(
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
