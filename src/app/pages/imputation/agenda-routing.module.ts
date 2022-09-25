import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgendaGridComponent } from "./agenda-grid/agenda-grid.component";
import { AgendaHistoryComponent } from "./agenda-history/agenda-history.component";


export const routes :Routes =[
  {
    path:"",
    children:[
      { path :"agenda", component :AgendaGridComponent},
      { path :"history", component :AgendaHistoryComponent}
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule{}
