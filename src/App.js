import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import uuid from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ]
  };

  deleteContact = id => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts
    });
  };

  addContact = (contact) => {
    contact.id = uuid();
    let contacts = [contact, ...this.state.contacts];
    this.setState({
      contacts
    });
  }

  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact addContact={this.addContact} />
          <Contacts
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
