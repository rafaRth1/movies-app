import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
   reducer: {
      reducer,
   },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Appthunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>;
