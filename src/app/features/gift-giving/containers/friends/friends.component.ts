import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../../models/friend';
import { Store } from '@ngrx/store';
import { GiftGivingState, selectAllMyFriends } from '../../reducers';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends$: Observable<Friend[]>;

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
    this.friends$ = this.store.select(selectAllMyFriends);
  }

}
