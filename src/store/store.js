import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../slices/contactsSlice"; // Ensure this is the correct path

const store = configureStore({
    reducer: {
        contacts: contactsReducer // The key should match the state key used in useSelector
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
