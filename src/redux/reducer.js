import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  fetchContacts,
  postContact,
  deleteContacts,
  filterContacts,
} from "./operations";

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContact.fulfilled]: (state, action) => [...state, action.payload],

  [deleteContacts.fulfilled]: (state, action) =>
    state.filter((element) => element.id !== action.meta.arg),
});

const filter = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});

// import { addContact, deleteContact, filterContact } from "./actions";

// const contacts = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter((element) => element.id !== action.payload),
// });

// const filter = createReducer("", {
//   [filterContact]: (state, action) => action.payload,
// });

// export default combineReducers({
//   contacts,
//   filter,
// });
