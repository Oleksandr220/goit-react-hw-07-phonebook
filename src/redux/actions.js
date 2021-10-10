import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("addContact", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortid.generate(),
    },
  };
});

const deleteContact = createAction("deleteContact");
const filterContact = createAction("filterContact");

export { addContact, deleteContact, filterContact };
