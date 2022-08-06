import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
    me: any;
};
export const initialState: UserState = {
    me: {
        email: '',
        password: '',
    },
};

const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUserInfo: (state, action: PayloadAction<any>) => ({
            ...state,
            me: action.payload,
        }),
    },
});

const { actions } = userSlide;
export const { saveUserInfo } = actions;
export default userSlide;
