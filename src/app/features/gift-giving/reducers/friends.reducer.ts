import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { select, createReducer, Action } from '@ngrx/store';


export interface FriendEntity {
  id: string;
  name: string;
}


export interface FriendState extends EntityState<FriendEntity> {

}

export const adapter = createEntityAdapter<FriendEntity>();

const { selectAll } = adapter.getSelectors();
export const selectFriendsArray = selectAll;

const initialState: FriendState = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', name: 'Sam'
    },
    2: {
      id: '2', name: 'John'
    },
    3: {
      id: '3', name: 'Smith'
    }
  }
};


const reducerFunction = createReducer(
  initialState
);

export function reducer(state: FriendState = initialState, action: Action) {
  return reducerFunction(state, action);
}
