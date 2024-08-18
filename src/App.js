// import logo from './logo.svg';
// import { createRoot } from "react-dom/client";
import './App.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import Contacts from './components/Contacts';
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddContacts from './components/AddContacts';
import { deleteContact } from './slices/contactsSlice';


function App() {

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  console.log(contacts);

  return (
    <div className="container">
      <AddContacts />
      <h1>Contacts</h1>
      {Array.isArray(contacts) && contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact.id} className="card mb-3 p-3">
            <h4 className="card-title">{contact.name}</h4>
            <p className="card-text">{contact.email}</p>
            <p className="card-text">{contact.phone}</p>
            <button
              className="btn btn-danger btn-sm mr-2 w-25"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default App;