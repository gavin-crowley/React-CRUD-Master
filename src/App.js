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
import { db } from './components/config/fbConfig'


class App extends Component {

  state = {
    contacts: [],
    id: '',
    name: '',
    email: '',
    phone: ''
  };

  componentDidMount() {
    db.collection('contacts')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ contacts: data });
      });
  }

  addContact = (contact) => {
    contact.id = uuidv4();
    db.collection("contacts")
      .doc(contact.id.toString())
      .set(contact)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  deleteContact = id => {
    db.collection('contacts').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  };


  updateContact = editedContact => {

    this.state.contacts.map(contact => {
      return contact.id === editedContact.id ? (db.collection('contacts')
        .doc(editedContact.id)
        .update(editedContact)
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        }))
        :
        (contact)
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
