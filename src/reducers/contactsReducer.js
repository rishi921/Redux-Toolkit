const contactsReducer = {
    //Case Reducer : contacts/add
    add: (state, action) => state.push(action.payload),
    //Case Reducer : contacts/add
    remove: (state, action) => {
        let index = state.findIndex(contact => contact.id === action.payload)
        state.splice(index, 1)
    }
}
export default contactsReducer;