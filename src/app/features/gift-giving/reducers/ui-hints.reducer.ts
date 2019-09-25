import { createReducer, Action, on } from '@ngrx/store';
import * as sortfilterActions from '../actions/sort-filter.actions';
import * as holidaysActions from '../actions/holidays.actions';
import * as friendsAction from '../actions/friends.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string; // 'name' | 'date';
  holidaysLoaded: boolean;
  friendsLoaded: boolean;
}

const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name',
  holidaysLoaded: false,
  friendsLoaded: false
};

const myReducer = createReducer(
  initialState,
  on(sortfilterActions.filterShowAll, (state) => ({ ...state, showAll: true })),
  on(sortfilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortfilterActions.sortHolidaysByDate, (state) => ({ ...state, sortHolidaysBy: 'date' })),
  on(sortfilterActions.sortHolidaysByName, (state) => ({ ...state, sortHolidaysBy: 'name' })),
  on(holidaysActions.loadHolidayData, (state) => ({ ...state, holidaysLoaded: false })),
  on(holidaysActions.loadDataSucceeded, (state) => ({ ...state, holidaysLoaded: true })),
  // Friends Loaded
  on(friendsAction.loadFriendsData, (state) => ({ ...state, friendsLoaded: false })),
  on(friendsAction.loadFriendsSucceeded, (state) => ({ ...state, friendsLoaded: true }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action); // cannot export createRecuder - so need to wrap it
}
