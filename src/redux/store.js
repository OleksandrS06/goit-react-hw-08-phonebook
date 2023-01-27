import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice/filterSlice';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
