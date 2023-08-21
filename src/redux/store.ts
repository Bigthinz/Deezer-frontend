import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deezerReducer from './deezerSlice';

const store = configureStore({
  reducer: {
    deezer: deezerReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
