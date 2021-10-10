import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

import axios from "axios";

const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  const result = await axios.get("http://localhost:3000/contacts");
  // console.log("result", result);
  return result.data;
});

const postContact = createAsyncThunk(
  "postContact",
  async ({ id, name, number }) => {
    const result = await axios
      .post("http://localhost:3000/contacts", {
        id,
        name,
        number,
      })
      .then((responsive) => responsive)
      .catch((error) => error);
    // console.log("result", result);
    return result.data;
  }
);

const deleteContacts = createAsyncThunk("deleteContacts", async (id) => {
  const result = await axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then((responsive) => responsive)
    .catch((error) => error);
  console.log("result", result);
  return result.data;
});

const filterContacts = createAction("filterContacts");

export { fetchContacts, postContact, deleteContacts, filterContacts };
