import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { movieSlice } from './';
import { authSlice } from './auth';

export const store = configureStore({
	reducer: {
		movie: movieSlice.reducer,
		auth: authSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Appthunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>;
