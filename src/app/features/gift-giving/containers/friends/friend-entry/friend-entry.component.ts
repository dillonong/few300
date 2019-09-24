import { Component, OnInit } from '@angular/core';
import { GiftGivingState } from '../../../reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../../actions/friends.actions';

@Component({
  selector: 'app-friend-entry',
  templateUrl: './friend-entry.component.html',
  styleUrls: ['./friend-entry.component.css']
})
export class FriendEntryComponent implements OnInit {

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
  }

  addFriend(nameEl: HTMLInputElement) {
    const name = nameEl.value;

    // dispatch
    this.store.dispatch(actions.friendAdded({ name }));

    nameEl.value = '';
    nameEl.focus();
  }
}
