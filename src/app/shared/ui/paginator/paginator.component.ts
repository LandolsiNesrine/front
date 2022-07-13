import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { pagination } from 'src/app/core/utils/pagination';
import { Pagination } from 'src/app/shared/models/utils';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements AfterViewInit, OnChanges {
  @Output() paginate: EventEmitter<Pagination> = new EventEmitter<Pagination>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() total: number;

  @Input() pageSize = pagination.itemsPerPage;
  pageSizeOptions = pagination.options;

  constructor() { }

  onPageChange(event: PageEvent) {
    const offSet = event.pageIndex;
    this.paginate.emit({ limit: event.pageSize, offSet });
  }

  ngAfterViewInit(): void {
    this.paginator.length = this.total;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { total } = changes;
    if (
      total.currentValue !== total.previousValue &&
      !total.isFirstChange() &&
      this.paginator
    ) {
      this.paginator.length = this.total;
    }
  }
}
