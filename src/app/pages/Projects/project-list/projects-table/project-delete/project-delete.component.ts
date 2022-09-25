import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProjectsTableComponent } from "../projects-table.component";
import { ProjectService } from "src/app/shared/service/project/project.service";

@Component({
  selector: "app-project-delete",
  templateUrl: "./project-delete.component.html",
  styleUrls: ["./project-delete.component.scss"],
})
export class ProjectDeleteComponent implements OnInit {
  obj;


  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.obj = data;
    //console.log(data);
  }

  ngOnInit(): void {}

  delete() {
    this.projectService
      .deleteProject(this.obj.codeProject)
      .subscribe((response) => {
        if (response["code"] == "200") {

        } else {
          alert("Erreur inetrne de systeme ");
        }
      });
  }
}
