import { useSelector } from "react-redux"

const Contacts = () => {
    const contacts = useSelector(state => state.contacts);

    return <>
        <h1>The list of contacts</h1>

        <ul>
            {contacts.map(c => <li>
                <h3>Name: {c.name}</h3>
                <h3>Email: {c.email}</h3>
                <h3>Phone: {c.mobile}</h3>
            </li>)}
        </ul>
    </>

}

export default Contacts;