import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {


  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <h1>Contacts</h1>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.props.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
