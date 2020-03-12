import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
// import uuid from 'uuid';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    contacts: [
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
    ]
  };

  deleteContact = id => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts
    });
  };

  addContact = (contact) => {
    contact.id = (this.state.contacts.length + 1).toString();
    console.log(contact)
    let contacts = [contact, ...this.state.contacts];
    this.setState({
      contacts
    });
    console.log(contacts)
  }


  updateContact = editedContact => {
    //Axios update will go here...
    //assing a copy of student array with modified value for the editedStudent.
    const contacts = this.state.contacts.map(contact => {
      return contact.id === editedContact.id ? editedContact : contact;
    });
    //set new state
    this.setState({
      contacts
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" render={(props) =>
                <Contacts {...props} contacts={this.state.contacts} deleteContact={this.deleteContact} />} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" render={(props) => <AddContact {...props} addContact={this.addContact} />} />
              <Route exact path="/contact/edit/:id" render={(props) => <EditContact {...props} {...this.state} updateContact={this.updateContact} />} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
