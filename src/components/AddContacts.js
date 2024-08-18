import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../slices/contactsSlice'

const AddContact = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id, name, email, mobile }));
        setId(id + 1);
        setName('');
        setEmail('');
        setMobile('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Mobile:</label>
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
    );
};


export default AddContact;