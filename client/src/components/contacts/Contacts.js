import React, {Fragment, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem'

const Contacts = () => {
const contactContext = useContext(ContactContext)
const {contacts} = contactContext;
console.log('contacts: ', contacts);
    return  (
        <Fragment>
            {contacts.map(contact=> (
                <ContactItem contact= {contact} key={contact.id}></ContactItem>
            ))}
        </Fragment>
    )
}

export default Contacts