import { combineReducers } from 'redux';
import userSlide from '../slide/user/userSlide';
export const rootReducer = combineReducers({
    user: userSlide.reducer,
});
