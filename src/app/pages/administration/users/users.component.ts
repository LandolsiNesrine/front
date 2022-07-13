import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination, SearchObject } from 'src/app/shared/models';
import { AdministrationService } from 'src/app/shared/service';
import { PaginatorComponent } from 'src/app/shared/ui/paginator/paginator.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(PaginatorComponent) p: PaginatorComponent;

  public data: any[] = [];
  public totalCount: number = 0;
  searchObject: SearchObject;

  breadCrumbItems: Array<{}>;

  public search = {
    'pagination': {
      "offSet": 0,
      "limit": 10
    },
    'sort': {
      "nameCol": "dateUpdate",
      "direction": "desc"
    },
    'dataSearch': null
  };

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'menu.administration' }, { label: 'menu.users', active: true }];
    this.loadData(this.search);
  }

  loadData(search) {
    this.administrationService.getListUsesr(search)
      .subscribe(response => {
        if (response['code'] == '200') {
          this.data = response['payload']['data'];
          this.totalCount = response['payload']['total'];
        } else {

        }
      }, error => {

      });
  }
  onPaginate(pagination: Pagination) {
    this.search = { ...this.search, pagination };
    this.loadData(this.search);
  }

  onSort(sort: any) {
    this.search = { ...this.search, sort };
    this.search.pagination.offSet = 0;
    this.p.paginator.pageIndex = 0;
    this.loadData(this.search);
  }

  onSearch($event: Partial<any>) {
    this.search.dataSearch = $event;
    this.search.pagination.offSet = 0;
    this.loadData(this.search);
    this.p.paginator.pageIndex = 0;
  }

}
