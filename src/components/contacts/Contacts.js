import React, { useState } from "react";
import Contact from './Contact';
// import { Link } from 'react-router-dom';



// const onShowClick = () => {
//   this.setState({ showContactInfo: !showContactInfo });
// };

const Contacts = props => {

  // const [seeContactInfo, setShowContactInfo] = useState(false);
  // const showContactInfo = () => setShowContactInfo(!seeContactInfo);

  // const { contacts } = this.props;

  return (
    <React.Fragment>
      <h1>Contacts</h1>
      {props.contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteClickHandler={() => props.deleteContact(contact.id)}
        // onClick={() => props.deleteUser(contact.id)}
        />

      ))}
    </React.Fragment>
  )

}

export default Contacts;
