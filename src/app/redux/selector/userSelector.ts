import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
const userSelector = (state: RootState) => state.user;
export const getUserInfoSelector = createSelector(userSelector, (subState) => subState);
