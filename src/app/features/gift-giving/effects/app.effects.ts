import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as appEffects from '../../../actions/app.actions';
import * as sortFilterActions from '../actions/sort-filter.actions';

@Injectable()
export class AppEffects {

  applicationStartedStuff$ = createEffect(() =>
    this.action$.pipe(
      ofType(appEffects.applicationStarted),
      // tap(() => console.log('Got the application started'))
      map(() => sortFilterActions.loadSavedPrefs())
    ), { dispatch: true }
  );

  constructor(private action$: Actions) { }
}
