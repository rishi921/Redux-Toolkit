import contactsSlice from "../slices/contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

const allReducers = {
    contacts: contactsSlice.reducer
}

const store = configureStore({
    reducer: allReducers,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store