import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss']
})
export class EmptyListComponent implements OnInit {

  @Input() list: any[] | undefined | null;
  @Input() withoutBorder = false;

  constructor() { }

  ngOnInit(): void {
  }

  get isArray() {
    return Array.isArray(this.list);
  }

  get isEmpty() {
    return this.isArray && !this.list.length;
  }

  get isNotEmpty() {
    return this.isArray && this.list.length;
  }

}
