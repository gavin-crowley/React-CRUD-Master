import React, { useState, useEffect } from 'react';
import classnames from 'classnames';


// class EditContact extends Component {
const EditContact = props => {
  // state = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   errors: {}
  // };

  const [contact, setContact] = useState(props.currentContact)

  useEffect(
    () => {
      setContact(props.currentContact)
    },
    [props]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
  }

  // componentDidMount() {

  //   const { id } = this.props.match.params;

  //   const editItem = this.props.contacts.find(contact => contact.id === id);

  //   this.setState({
  //     id: editItem.id,
  //     name: editItem.name,
  //     email: editItem.email,
  //     phone: editItem.phone
  //   });
  // }

  const onSubmit = e => {
    e.preventDefault();

    // const { id, name, email, phone } = this.state;

    // if (name === '') {
    //   this.setState({ errors: { name: 'Name is required' } });
    //   return;
    // }

    // if (email === '') {
    //   this.setState({ errors: { email: 'Email is required' } });
    //   return;
    // }

    // const updContact = {
    //   id,
    //   name,
    //   email,
    //   phone
    // };

    // props.updateContact(updContact);
    props.updateContact(contact.id, contact)

    // this.setState({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   errors: ''
    // });

    // Redirect using history object
    props.history.push('/');
  };

  // onChange = e => this.setState({ [e.target.name]: e.target.value });

  // render() {
  // const { name, email, phone, errors } = this.state;

  return (
    <div className="card mb-3">
      <div className="card-header bg-dark text-white">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              // className="form-control"
              className={classnames('form-control form-control-lg', {
                // 'is-invalid': errors.name
              })}
              placeholder="Enter name..."
              value={contact.name}
              onChange={handleInputChange}
            />
            {/* {errors.name && <div className="invalid-feedback">{errors.name}</div>} */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className={classnames('form-control form-control-lg', {
                // 'is-invalid': errors.email
              })}
              placeholder="Enter email..."
              value={contact.email}
              onChange={handleInputChange}
            />
            {/* {errors.email && <div className="invalid-feedback">{errors.email}</div>} */}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter phone..."
              value={contact.phone}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="submit"
            value="Edit Contact"
            className="btn btn-success btn-block"
          />
        </form>
      </div>
    </div>
  );
  // }
}

export default EditContact;
