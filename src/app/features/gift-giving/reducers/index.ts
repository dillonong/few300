
export const featureName = 'giftGiving';
import * as fromHolidays from './holidays.reducer';

export interface GiftGivingState {

}

export const reducers = {
  holidays: fromHolidays.reducer
};
