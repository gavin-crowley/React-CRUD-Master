import React, { Component } from 'react';
import classnames from 'classnames';


class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  componentDidMount() {
    // const { id } = this.props.match.params;
    // const res = await axios.get(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // );

    // const contact = res.data;

    console.log(this.props.contacts)
    // // console.log(Object.assign({}, this.props.contacts))
    // const obj = Object.assign({}, this.props.contacts)
    // console.log(Object.keys(obj));
    // console.log(this.props.contacts.id)
    const { id } = this.props.match.params;
    // console.log(id)

    // const editItem = this.props.contacts[id]
    const editItem = this.props.contacts.find(contact => contact.id === id);
    console.log(editItem.name)
    // console.log(editItem)

    // console.log(this.props.match.params)
    // const { id } = this.props.match.params
    // console.log(id)
    // console.log(Object.assign({}, this.props.contacts))
    // const { id, name, email, phone } = Object.assign({}, this.props.contacts);
    // const { name, email, phone } = this.props.contacts;
    // console.log(name)

    this.setState({
      id: editItem.id,
      name: editItem.name,
      email: editItem.email,
      phone: editItem.phone
    });

    // console.log(this.state)

  }

  onSubmit = e => {
    e.preventDefault();

    // console.log(this.props)
    // this.props.EditContact(this.state);
    // e.id = this.props.id;
    // const { id } = this.props.match.params
    // console.log(id)

    // const { name, email, phone } = this.props;
    const { id, name, email, phone } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    const updContact = {
      id,
      name,
      email,
      phone
    };

    // console.log(updContact)

    this.props.updateContact(updContact);

    // const { id } = this.props.match.params;

    // const updItem = this.props.contacts[id - 1]
    // console.log(updItem)

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: ''
    });

    // Redirect using history object
    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header bg-dark text-white">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                // className="form-control"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.name
                })}
                // placeholder={this.props.contacts.name}
                placeholder="Enter name..."
                value={name}
                onChange={this.onChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })}
                placeholder="Enter email..."
                value={email}
                onChange={this.onChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter phone..."
                value={phone}
                onChange={this.onChange}
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
  }
}

export default EditContact;
