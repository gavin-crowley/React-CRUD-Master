import React, { useState } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const initialContacts = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: '555-555-5555'
  },
  {
    id: '2',
    name: 'Karen Williams',
    email: 'karen@gmail.com',
    phone: '444-444-4444'
  },
  {
    id: '3',
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-333'
  }
];

const App = () => {

  // const state = {
  //   contacts: [],
  //   id: '',
  //   name: '',
  //   email: '',
  //   phone: ''
  // };


  // Setting state
  const [contacts, setContacts] = useState(initialContacts);
  const [currentContact, setCurrentContact] = useState(contacts);


  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const addContact = contact => {
    contact.id = (contacts.length + 1).toString();
    setContacts([...contacts, contact])
    // console.log(contacts)
    // console.log(contact)
  }


  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
  }

  const editRow = contact => {
    setCurrentContact({ id: contact.id, name: contact.name, email: contact.email, phone: contact.phone })
  }

  return (
    <Router>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" render={(props) =>
              <Contacts {...props} contacts={contacts} editRow={editRow} deleteContact={deleteContact} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact/add" render={(props) => <AddContact {...props} addContact={addContact} />} />
            <Route exact path="/contact/edit/:id" render={(props) => <EditContact {...props} currentContact={currentContact} updateContact={updateContact} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
