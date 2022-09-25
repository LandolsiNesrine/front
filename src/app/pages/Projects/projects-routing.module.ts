import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectAddComponent } from "./project-add/project-add.component";
import { ProjectListComponent } from "./project-list/project-list.component";

 export const routes: Routes = [
  {
    path: "",
    children: [
      { path:"projectlist", component: ProjectListComponent },
      { path:"projectadd" , component: ProjectAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
