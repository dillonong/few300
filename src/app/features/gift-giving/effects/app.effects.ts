import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as appEffects from '../../../actions/app.actions';
import * as sortFilterActions from '../actions/sort-filter.actions';
import { loadHolidayData } from '../actions/holidays.actions';
import { loadFriendsData } from '../actions/friends.actions';


@Injectable()
export class AppEffects {

  applicationStartedStuff$ = createEffect(() =>
    this.action$.pipe(
      ofType(appEffects.applicationStarted),
      // tap(() => console.log('Got the application started'))
      map(() => sortFilterActions.loadSavedPrefs())
    ), { dispatch: true }
  );

  onAppStartLoadHolidays$ = createEffect(() =>
    this.action$.pipe(
      ofType(appEffects.applicationStarted),
      map(() => loadHolidayData())
    ), { dispatch: true }
  );

  onAppStartLoadFriendss$ = createEffect(() =>
    this.action$.pipe(
      ofType(appEffects.applicationStarted),
      map(() => loadFriendsData())
    ), { dispatch: true }
  );

  constructor(private action$: Actions) { }
}
