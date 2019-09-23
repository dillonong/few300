import { Component, OnInit } from '@angular/core';
import { HolidayListItem } from '../../models';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model: HolidayListItem[] = [
    { id: '1', name: 'Christmas!!', date: '2019-12-25T00:00:00.000Z', past: false },
    { id: '2', name: 'Jeff\'s Birthday', date: '2019-04-20T00:00:00.000Z', past: true }
  ];
  constructor() { }

  ngOnInit() {
  }

}
