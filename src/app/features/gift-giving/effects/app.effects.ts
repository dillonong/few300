import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pipe } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import * as appEffects from '../../../actions/app.actions';
import * as sortFilterActions from '../actions/sort-filter.actions';
import * as holidaysActions from '../actions/holidays.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { HolidayEntity } from '../reducers/holidays.reducer';

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
      switchMap(() => this.client.get<{ holidays: HolidayEntity[] }>(environment.holidayUrl)
        .pipe(
          map(response => response.holidays),
          map(holidays => holidaysActions.loadDataSucceeded({ data: holidays }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private action$: Actions, private client: HttpClient) { }
}
