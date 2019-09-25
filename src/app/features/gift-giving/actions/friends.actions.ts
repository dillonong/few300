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

export const loadFriendsSucceeded = createAction(
  '[gift giving] load friends succeeded',
  props<{ data: Friend[] }>()
);

export const loadFriendsailed = createAction(
  '[gift giving] load friends failed',
  props<{ data: Friend[] }>()
);
