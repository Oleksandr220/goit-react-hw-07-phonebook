import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReduser from "./reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
