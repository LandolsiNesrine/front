import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination, SearchObject } from "src/app/shared/models";
import { AgednaService } from 'src/app/shared/service/agenda/agenda.service';
import { PaginatorComponent } from "src/app/shared/ui/paginator/paginator.component";

@Component({
  selector: 'app-agenda-grid',
  templateUrl: './agenda-grid.component.html',
  styleUrls: ['./agenda-grid.component.scss']
})
export class AgendaGridComponent implements OnInit {
  @ViewChild(PaginatorComponent) p: PaginatorComponent;
  breadCrumbItems: Array<{}>;
  alert: boolean = false;
  alertmsg: String;
  typealert: String;


  public data: any[] = [];
  public totalCount: number = 0;
  searchObject: SearchObject;

  public search = {
    'pagination': {
      "offSet": 0,
      "limit": 10
    },
    'sort': {
      "nameCol": "Price",
      "direction": "desc"
    },
    'dataSearch': null
  };
  constructor( private agendaService :AgednaService) { }

  ngOnInit(): void {
    this.loadData();
  }

  newalert(event: boolean) {
    this.alert = event;
    this.alertmsg = "Success !Your data has been deleted successfuly.";
    this.typealert = "alert alert-success ";
  }
  closeAlert() {
    this.alert = false;
  }

  setUsername(){
    return "admin"
  }
  loadData() {
    this.agendaService.getagendaByUsername(this.setUsername()).subscribe(
      (response) => {
        if (response["code"] == "200") {
          this.data = response["payload"];

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
  onPaginate(pagination: Pagination) {
    this.search = { ...this.search, pagination };
    this.loadData();
  }

  onSort(sort: any) {

    this.search = { ...this.search, sort };

    this.search.pagination.offSet = 0;
    this.p.paginator.pageIndex = 0;
    this.searchData(this.search);
  }




  searchData(search) {
    this.agendaService.searchData(search).subscribe(
      (response) => {
        if (response["code"] == "200") {
          this.data = response["payload"]["data"];
          this.totalCount = response["payload"]["total"];
          console.log("search",response["payload"]["data"])
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSearch(event: any) {
    this.search.dataSearch = event;
    console.log("datasearch",this.search.dataSearch)
    //Service Datasearch
    this.searchData(this.search.dataSearch);

    this.search.pagination.offSet = 0;
    this.p.paginator.pageIndex = 0;
  }
}
