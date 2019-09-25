import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as friendsActions from '../actions/friends.actions';
import { switchMap, map } from 'rxjs/operators';
import { FriendEntity } from '../reducers/friends.reducer';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FriendsEffects {

  loadHolidayData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(friendsActions.loadFriendsData),
      switchMap(() => this.client.get<{ friends: FriendEntity[] }>(environment.friendsUrl)
        .pipe(
          map(response => response.friends),
          map(friends => friendsActions.loadFriendsSucceeded({ data: friends }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
