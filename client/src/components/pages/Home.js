import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter';
import Authcontext from '../../context/auth/authContext';
import { useContext } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const authContext = useContext(Authcontext);
    useEffect(() => {
     authContext.loadUser();

     // eslint-disable-next-line
    }, []);
    return (
        <div className="grid-2">
            <div>
            <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
