import React, { useState } from "react";
// import Contact from './Contact';
import { Link } from 'react-router-dom';



// const onShowClick = () => {
//   this.setState({ showContactInfo: !showContactInfo });
// };

const Contacts = props => {

  const [seeContactInfo, setShowContactInfo] = useState(false);
  const showContactInfo = () => setShowContactInfo(!seeContactInfo);

  // const { contacts } = this.props;

  return (
    <React.Fragment>
      <h1>Contacts</h1>
      {props.contacts.map(contact => (
        // <Contact
        //   key={contact.id}
        //   contact={contact}
        //   deleteClickHandler={props.deleteContact(contact.id)}
        // // onClick={() => props.deleteUser(user.id)}
        // />
        <div key={contact.id} className="card card-body mb-3">
          <h4>
            {contact.name}{' '}
            <i
              onClick={showContactInfo}
              className="fas fa-sort-down"
              style={{ cursor: 'pointer' }}
            />
            <i
              onClick={() => props.deleteContact(contact.id)}
              className="fas fa-times"
              style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            />
            <Link to={`contact/edit/${contact.id}`}>
              <i
                className="fas fa-pencil-alt"
                style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'black',
                  marginRight: '1rem'
                }}
              />
            </Link>
          </h4>
          {seeContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {contact.email}</li>
              <li className="list-group-item">Phone: {contact.phone}</li>
            </ul>
          ) : null}
        </div>
      ))}
    </React.Fragment>
  )

}

export default Contacts;
