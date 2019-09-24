import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/holidays.actions';

export interface HolidayEntity {
  id: string;
  name: string;
  date: string;
}

// EntityState -- This is where the IDs and Entities are defined
export interface HolidayState extends EntityState<HolidayEntity> {

}

export const adapter = createEntityAdapter<HolidayEntity>();

const { selectAll } = adapter.getSelectors(); // ONLY want selectAll from the getSelectors
export const selectHolidayArray = selectAll;

const initialState = adapter.getInitialState(); // Returns an empty InitialState

// --- GETTING THIS FROM THE API gift-api
// const initialState: HolidayState = {
//   ids: ['1', '2', '3'],
//   entities: {
//     1: {
//       id: '1',
//       name: 'Christmas 2019',
//       date: '2019-12-25T00:00:00.000Z'
//     },
//     2: {
//       id: '2',
//       name: 'New Year\'s',
//       date: '2020-01-01T00:00:00.000Z'
//     },
//     3: {
//       id: '3',
//       name: 'Labor Day',
//       date: '2019-09-01T00:00:00.000Z'
//     }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.holidayAdded, (state, action) => adapter.addOne(action.entity, state)),
  on(actions.loadDataSucceeded, (state, action) => adapter.addAll(action.data, state)), // - THIS IS WHAT LOADS DATA after getting from API
  on(actions.holidayAddedSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.newEntity, tempState);
  }),
  on(actions.holidayAddedFailure, (state, action) => adapter.removeOne(action.entity.id, state))
);

export function reducer(state: HolidayState = initialState, action: Action) {
  return reducerFunction(state, action);
}
