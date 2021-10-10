import "./App.css";
import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchContacts,
  postContact,
  deleteContacts,
  filterContacts,
} from "./redux/operations";

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import Conteiner from "./components/Conteiner/Conteiner";
import shortid from "shortid";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const addContacts = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    console.log(contact);

    const inIsContact = (e) => {
      return contact.name === e.name;
    };
    if (data.name === "" || data.number === "") {
      alert("Please make a correct contact");
      return;
    }
    if (contacts.some(inIsContact)) {
      alert(`${data.name} is already in contacts`);
    } else dispatch(postContact(contact));
  };

  const deleteContact = (eventId) => {
    dispatch(deleteContacts(eventId));
  };

  const changeFilter = (event) => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
  );

  return (
    <>
      <Conteiner title="Phonebook">
        <Form addContacts={addContacts} />
      </Conteiner>
      <Conteiner title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
            <ContactsList
              users={visibleContacts}
              ondeleteContact={deleteContact}
            />
          </>
        ) : (
          <span className="contact-message">
            You have not contacts yet, please add contact to phoneboock
          </span>
        )}
      </Conteiner>
    </>
  );
}

export default App;
