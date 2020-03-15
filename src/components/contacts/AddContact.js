import React, { Component } from 'react';
import classnames from 'classnames';
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        phone: '',
        errors: ''
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

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
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header bg-dark text-white">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name: </label>
                                        <input
                                            type="text"
                                            name="name"
                                            // className="form-control"
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
                                        value="Add Contact"
                                        className="btn btn-success btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContact;
