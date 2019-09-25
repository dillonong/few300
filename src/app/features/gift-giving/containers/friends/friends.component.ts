import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../../models/friend';
import { Store } from '@ngrx/store';
import { GiftGivingState, selectAllMyFriends, selectFriendsLoaded } from '../../reducers';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends$: Observable<Friend[]>;
  friendsLoaded$: Observable<boolean>;

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
    this.friends$ = this.store.select(selectAllMyFriends);
    this.friendsLoaded$ = this.store.select(selectFriendsLoaded);
  }

}
