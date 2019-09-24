import { Friend } from '../models/friend';
import { createAction } from '@ngrx/store';

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
