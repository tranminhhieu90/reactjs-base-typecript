import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from '~/app/redux/reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false,
        }),
});

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
