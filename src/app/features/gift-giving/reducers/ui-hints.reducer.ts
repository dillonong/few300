import { createReducer, Action, on } from '@ngrx/store';
import * as sortfilterActions from '../actions/sort-filter.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string; // 'name' | 'date';
}

const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name'
};

const myReducer = createReducer(
  initialState,
  on(sortfilterActions.filterShowAll, (state) => ({ ...state, showAll: true })),
  on(sortfilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortfilterActions.sortHolidaysByDate, (state) => ({ ...state, sortHolidaysBy: 'date' })),
  on(sortfilterActions.sortHolidaysByName, (state) => ({ ...state, sortHolidaysBy: 'name' }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action); // cannot export createRecuder - so need to wrap it
}
