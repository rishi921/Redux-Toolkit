import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../slices/contactsSlice'

const AddContact = () => {
    const dispatch = useDispatch();
    // const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState("");
    // const [mobile, setMobile] = useState('');

    const AddContact = () => {
        if (!name || !email || !phone) {
            alert("Please fill all the fields");
            return;
        }

        dispatch(addContact({ name, email, phone }));
        setName("");
        setEmail("");
        setPhone("");
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(addContact({ id, name, email, mobile }));
    //     setId(id + 1);
    //     setName('');
    //     setEmail('');
    //     setMobile('');
    // };

    return (
        <div>
            <h3>Add Contact</h3>
            <form>
                <div className="form-group">
                    <label>Name : </label>
                    <input
                        type="text"
                        placeholder='Enter Name'
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="form-group">
                    <label>Email : </label>
                    <input
                        type="email"
                        placeholder='Enter Email id'
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="form-group">
                    <label>Phone : </label>
                    <input
                        type="text"
                        placeholder='Enter Phone No.'
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control form-control-lg"
                    />
                </div>
            </form>
            <button
                className="btn btn-primary btn-lg mt-3"
                onClick={() => AddContact()}
            >
                Add Contact
            </button>
        </div>
    );
};

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>ID:</label>
//                 <input
//                     type="text"
//                     value={id}
//                     onChange={(e) => setId(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Mobile:</label>
//                 <input
//                     type="text"
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Add Contact</button>
//         </form>
//     );
// };


export default AddContact;