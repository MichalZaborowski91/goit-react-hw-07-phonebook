import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
