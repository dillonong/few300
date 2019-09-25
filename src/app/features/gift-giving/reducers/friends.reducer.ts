import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { select, createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/friends.actions';


export interface FriendEntity {
  id: string;
  name: string;
}


export interface FriendState extends EntityState<FriendEntity> {

}

export const adapter = createEntityAdapter<FriendEntity>();

const { selectAll } = adapter.getSelectors();
export const selectFriendsArray = selectAll;

const initialState = adapter.getInitialState();


const reducerFunction = createReducer(
  initialState,
  on(actions.friendAdded, (state, action) => adapter.addOne(action.entity, state)),
  on(actions.loadFriendsSucceeded, (state, action) => adapter.addAll(action.data, state))

);

export function reducer(state: FriendState = initialState, action: Action) {
  return reducerFunction(state, action);
}
