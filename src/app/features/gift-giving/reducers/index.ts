
export const featureName = 'giftGiving';
import * as fromHolidays from './holidays.reducer';
import * as fromUiHints from './ui-hints.reducer';
import * as fromFriends from './friends.reducer';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import { HolidayListItem } from '../models';
import { Friend } from '../models/friend';

export interface GiftGivingState {
  holidays: fromHolidays.HolidayState;
  uiHints: fromUiHints.UiHintsState;
  friends: fromFriends.FriendState;
}

export const reducers: ActionReducerMap<GiftGivingState> = {
  holidays: fromHolidays.reducer,
  uiHints: fromUiHints.reducer,
  friends: fromFriends.reducer
};

// Feature selector
const selectFeature = createFeatureSelector<GiftGivingState>(featureName);

// Selector Per Branch (e.g. one for 'holidays)
const selectHolidaysBranch = createSelector(selectFeature, b => b.holidays);
const selectUiHintsBranch = createSelector(selectFeature, b => b.uiHints);
const selectFriendsBranch = createSelector(selectFeature, f => f.friends);

// Helpers
const selectHolidayArray = createSelector(selectHolidaysBranch, fromHolidays.selectHolidayArray);
export const selectShowAllHolidays = createSelector(selectUiHintsBranch, b => b.showAll);
export const selectSortingHolidaysBy = createSelector(selectUiHintsBranch, b => b.sortHolidaysBy);

const selectFriendsArray = createSelector(selectFriendsBranch, fromFriends.selectFriendsArray);

// Then what your components need
export const seleectHolidaysLoaded = createSelector(selectUiHintsBranch, b => b.holidaysLoaded);


// - we need one that returns a HolidayListItem[] for our holidayList Component
const selectHolidayListItemsUnFiltered = createSelector(selectHolidayArray, holidays =>
  holidays.map(holiday => ({
    id: holiday.id,
    date: holiday.date,
    name: holiday.name,
    past: new Date(holiday.date) < new Date(),
    isTemporary: holiday.id.startsWith('T')
  } as HolidayListItem))
);

const selectHolidayListSorted = createSelector(selectHolidayListItemsUnFiltered, selectSortingHolidaysBy,
  (list, by) => {
    return [...list.sort((lhs, rhs) => {
      if (lhs[by] < rhs[by]) { // [by] is name or date. it is like getting the property lhs.date, or lhs.name.
        return -1;
      }
      if (lhs[by] > rhs[by]) {
        return 1;
      }
      return 0;
    })];
  }
);

export const selectHolidayListItems = createSelector(selectShowAllHolidays, selectHolidayListSorted, (all, holidays) =>
  holidays.filter(h => all ? true : !h.past)
);

export const selectAllMyFriends = createSelector(selectFriendsArray, friends =>
  friends.map(afriend => ({
    id: afriend.id,
    name: afriend.name
  } as Friend))
);


