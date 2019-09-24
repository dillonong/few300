import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as holidaysActions from '../actions/holidays.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { HolidayEntity } from '../reducers/holidays.reducer';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class HolidayEffects {

  loadHolidayData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(holidaysActions.loadHolidayData),
      switchMap(() => this.client.get<{ holidays: HolidayEntity[] }>(environment.holidayUrl)
        .pipe(
          map(response => response.holidays),
          map(holidays => holidaysActions.loadDataSucceeded({ data: holidays }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
