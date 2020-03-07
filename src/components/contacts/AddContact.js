import React, { Component } from 'react';
import classnames from 'classnames';


class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = e => {
        e.preventDefault();

        this.props.addContact(this.state);

        const { name, email } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

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
                <div className="card-header bg-dark text-white">Add Contact</div>
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
        );
    }
}

export default AddContact;
