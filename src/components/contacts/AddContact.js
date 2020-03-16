import React, { useState } from 'react';
import classnames from 'classnames';


const AddContact = props => {
    // state = {
    //     id: '',
    //     name: '',
    //     email: '',
    //     phone: '',
    //     errors: {}
    // };
    const initialFormState = { id: null, name: '', email: '', phone: '' }
    const [contact, setContact] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setContact({ ...contact, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault();

        props.addContact(contact);
        setContact(initialFormState)

        // const { name, email } = contact;

        // if (name === '') {
        //     this.setState({ errors: { name: 'Name is required' } });
        //     return;
        // }

        // if (email === '') {
        //     this.setState({ errors: { email: 'Email is required' } });
        //     return;
        // }

        // this.setState({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     errors: ''
        // });

        // Redirect using history object
        props.history.push('/');
    };

    // onChange = e => this.setState({ [e.target.name]: e.target.value });


    // const { name, email, phone, errors } = this.state;

    return (
        <div className="card mb-3">
            <div className="card-header bg-dark text-white">Add Contact</div>
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
                        value="Add Contact"
                        className="btn btn-success btn-block"
                    />
                </form>
            </div>
        </div>
    );

}

export default AddContact;
