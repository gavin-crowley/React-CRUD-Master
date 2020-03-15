import React, { Component } from 'react';
import classnames from 'classnames';
import { Consumer } from '../../context';
import { Context } from '../../context'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  static contextType = Context;

  componentDidMount() {

    const { id } = this.props.match.params;

    const editItem = this.context.contacts.find(contact => contact.id === id);

    this.setState({
      id: editItem.id,
      name: editItem.name,
      email: editItem.email,
      phone: editItem.phone
    });
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

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


    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: ''
    });

    dispatch({ type: 'UPDATE_CONTACT', payload: updContact });


    // Redirect using history object
    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (<div className="card mb-3">
            <div className="card-header bg-dark text-white">Edit Contact</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
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
          </div>)
        }}
      </Consumer>
    );
  }
}

export default EditContact;
