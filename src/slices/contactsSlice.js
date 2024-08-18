import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "../data/contact";

const contactsSlice = createSlice({
    name: 'contacts-list',
    initialState: contactsInitialState, // Initial state should be the array you've defined
    reducers: {
        addContact: (state, action) => {
            state.push(action.payload);
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";
// import contactsReducer from "../reducers/contactsReducer";
// import contactsInitialState from "../data/contact"

// const contactsSlice = createSlice({
//     name: 'contacts-list',
//     initialState: contactsInitialState,
//     reducer: contactsReducer
// })

// export const {addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice;

// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: [],
//     reducers: {
//         addContact: (state, action) => {
//             state.push(action.payload);
//         },
//         deleteContact: (state, action) => {
//             return state.filter(contact => contact.id !== action.payload);
//         }
//     }
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice;
