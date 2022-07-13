import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @ViewChild('content') content;
  constructor() { }

  ngOnInit() { }

}
