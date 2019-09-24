import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as actions from '../actions/sort-filter.actions';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class SortFilterEffects {


  // 1. Get the load Prefs load from local Storage Dispatch the action
  // Create 1 for each because there is no if else to get item from local storage.. Keep it simple
  // Use 1 per localStorage property
  loadSort$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSavedPrefs),
      map(() => localStorage.getItem('holiday-sort')),
      filter(savedSort => savedSort !== null),
      map(savedSort => {
        if (savedSort === 'name') {
          return actions.sortHolidaysByName();
        } else {
          return actions.sortHolidaysByDate();
        }
      })
    )
  );

  loadFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSavedPrefs),
      map(() => localStorage.getItem('holiday-filter')),
      filter(savedSort => savedSort !== null),
      map(savedSort => {
        if (savedSort === 'upcoming') {
          return actions.filterShowOnlyUpcoming();
        } else {
          return actions.filterShowAll();
        }
      })
    )
  );

  // 2. Sort Changed SAVE pref
  saveSortHolidayName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.sortHolidaysByName),
      tap(() => localStorage.setItem('holiday-sort', 'name'))
    ), { dispatch: false }
  );

  saveSortHolidayDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.sortHolidaysByDate),
      tap(() => localStorage.setItem('holiday-sort', 'date'))
    ), { dispatch: false }
  );

  // 3. Filter Changed save to Pref
  saveFilterAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.filterShowAll),
      tap(() => localStorage.setItem('holiday-filter', 'all'))
    ), { dispatch: false }
  );

  saveFilterUpcoming$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.filterShowOnlyUpcoming),
      tap(() => localStorage.setItem('holiday-filter', 'upcoming'))
    ), { dispatch: false }
  );



  constructor(private actions$: Actions) { }
}
