import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './actions';
import { handlePending, handleRejected } from './selectors';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsReducer = createReducer(initialState, {
  [fetchContacts.pending]: handlePending,
  [fetchContacts.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  [fetchContacts.rejected]: handleRejected,

  [addContact.pending]: handlePending,
  [addContact.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  },
  [addContact.rejected]: handleRejected,

  [deleteContact.pending]: handlePending,
  [deleteContact.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
      contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1);
  },
  [deleteContact.rejected]: handleRejected,
});
