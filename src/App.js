import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {

  state = {
    contacts: this.returnContacts(),
    id: '',
    name: '',
    email: '',
    phone: ''
  };

  returnContacts() {
    if (localStorage.getItem('contacts') === null) localStorage.setItem('contacts', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('contacts'))
  }


  deleteContact = id => {
    const contacts = this.returnContacts().filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts))
    this.setState({
      contacts
    });
  };

  addContact = (contact) => {
    contact.id = uuidv4();
    let contacts = [contact, ...this.state.contacts];
    localStorage.setItem('contacts', JSON.stringify(contacts))
    this.setState({
      contacts
    });
  }


  updateContact = editedContact => {
    //Axios update will go here...
    //assing a copy of student array with modified value for the editedStudent.
    const contacts = this.state.contacts.map(contact => {
      return contact.id === editedContact.id ? editedContact : contact;
    });
    localStorage.setItem('contacts', JSON.stringify(contacts))
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
