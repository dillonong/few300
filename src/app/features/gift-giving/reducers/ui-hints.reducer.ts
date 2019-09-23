import { createReducer, Action, on } from '@ngrx/store';
import * as sortfilterActions from '../actions/sort-filter.actions';

export interface UiHintsState {
  showAll: boolean;
}

const initialState: UiHintsState = {
  showAll: true
};

const myReducer = createReducer(
  initialState,
  on(sortfilterActions.filterShowAll, () => ({ showAll: true })),
  on(sortfilterActions.filterShowOnlyUpcoming, () => ({ showAll: false }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action); // cannot export createRecuder - so need to wrap it
}
