
export const featureName = 'giftGiving';
import * as fromHolidays from './holidays.reducer';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import { HolidayListItem } from '../models';

export interface GiftGivingState {
  holidays: fromHolidays.HolidayState;
}

export const reducers: ActionReducerMap<GiftGivingState> = {
  holidays: fromHolidays.reducer
};

// Feature selector
const selectFeature = createFeatureSelector<GiftGivingState>(featureName);

// Selector Per Branch (e.g. one for 'holidays)
const selectHolidaysBranch = createSelector(selectFeature, b => b.holidays);

// Helpers
const selectHolidayArray = createSelector(selectHolidaysBranch, fromHolidays.selectHolidayArray);
// Then what your components need

// - we need one that returns a HolidayListItem[] for our holidayList Component
export const selectHolidayListItems = createSelector(selectHolidayArray, holidays =>
  holidays.map(holiday => ({
    id: holiday.id,
    date: holiday.date,
    name: holiday.name,
    past: new Date(holiday.date) > new Date()
  } as HolidayListItem))
);

