import React from "react";
import Contact from './Contact';


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
          editClickHandler={() => props.editRow(contact)}
        />

      ))}
    </React.Fragment>
  )

}

export default Contacts;
