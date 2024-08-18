const contactsReducer = {
    //Case Reducer : contacts/add
    addContact: (state, action) => {
        state.push(action.payload);
    },
    //Case Reducer : contacts/add
    deleteContact: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);

    }
}
export default contactsReducer;