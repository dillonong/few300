import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../../models/friend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  @Input() model: Friend[] = [];
  constructor() { }

  ngOnInit() {
  }

}
