import { createReducer, Action, on } from '@ngrx/store';
import * as sortfilterActions from '../actions/sort-filter.actions';
import * as holidaysActions from '../actions/holidays.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string; // 'name' | 'date';
  holidaysLoaded: boolean;
}

const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name',
  holidaysLoaded: false
};

const myReducer = createReducer(
  initialState,
  on(sortfilterActions.filterShowAll, (state) => ({ ...state, showAll: true })),
  on(sortfilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortfilterActions.sortHolidaysByDate, (state) => ({ ...state, sortHolidaysBy: 'date' })),
  on(sortfilterActions.sortHolidaysByName, (state) => ({ ...state, sortHolidaysBy: 'name' })),
  on(holidaysActions.loadHolidayData, (state) => ({ ...state, holidaysLoaded: false })),
  on(holidaysActions.loadDataSucceeded, (state) => ({ ...state, holidaysLoaded: true }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action); // cannot export createRecuder - so need to wrap it
}
