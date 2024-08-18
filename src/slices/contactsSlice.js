import { createSlice } from "@reduxjs/toolkit";
import contactsReducer from "../reducers/contactsReducer";
import contactsInitialState from "../data/contact"

const contactsSlice = createSlice({
    name: 'contacts-list',
    initialState: contactsInitialState,
    reducer: contactsReducer
})

export const {add, }
export default contactsSlice;