import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-log-data-table',
  templateUrl: './log-data-table.component.html',
  styleUrls: ['./log-data-table.component.scss']
})
export class LogDataTableComponent implements OnInit {

  @Output() sort = new EventEmitter<any>();
  @Input() set list(list: any[]) {
    if (list) {
      this.dataSource.data = list;
    }
  }

  dataSource = new MatTableDataSource<any>();
  private _list: any[];

  displayedColumns: string[] = ['fullName', 'libelleAdmProfile', 'ipAddress', 'uri', 'resultWs', 'dateLog'];
  displayedColumnsAr: string[] = ['fullName', 'libelleAdmProfileAr', 'ipAddress', 'uri', 'resultWs', 'dateLog'];
  displayedColumnsEn: string[] = ['fullName', 'libelleAdmProfileEn', 'ipAddress', 'uri', 'resultWs', 'dateLog'];

  constructor(private languageService: LanguageService) { 

  }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  getLang() {
    return this.languageService.getLangugae();
  }

  getCol() {
    if (this.languageService.getLangugae() == 'ar')
      return this.displayedColumnsAr;
    else if (this.languageService.getLangugae() == 'fr')
      return this.displayedColumns;
    else
      return this.displayedColumnsEn;
  }

  onSortChange($event: any) {
    this.sort.emit({
      nameCol: $event.active as any,
      direction: $event.direction.toUpperCase() as any,
    });
  }

  get list(): any[] {
    return this._list;
  }

}
