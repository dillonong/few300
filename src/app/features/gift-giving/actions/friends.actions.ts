import { Friend } from '../models/friend';
import { createAction, props } from '@ngrx/store';

const currentId = 100;

export const friendAdded = createAction(
  '[gift givign] friend Added',
  ({ name }: { name: string }) => ({
    entity: {
      id: 'T' + currentId,
      name
    } as Friend
  })
);

export const loadFriendsData = createAction(
  '[gift giving] load friend data'
);

export const loadDataSucceeded = createAction(
  '[gift giving] load data succeeded',
  props<{ data: Friend[] }>()
);

export const loadDataFailed = createAction(
  '[gift giving] load data failed',
  props<{ data: Friend[] }>()
);
