import React, { useReducer } from 'react'
import {v4 as uuid}  from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name: 'jill johnson',
                phone: '111-111-1111',
                type: 'personal',
                email:'jill@gmail.com'
            },
            {
                id:2,
                name: 'Sara Watson',
                phone: '222-222-2222',
                type: 'personal',
                email:'sara@gmail.com'

            },
            {
                id:3,
                name: 'Harry white',
                phone: '333-333-3333',
                type: 'professional',
                email:'harry@gmail.com'

            }

        ]
    }

    const  [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    const addContact = contact => {
        contact.id = uuid();
        dispatch({type:ADD_CONTACT, payload:contact})
    }
    //Delete Contact

   // Set  Current Contact

  // Clear Current contact

   // Update contacts

   // Clear filter

   return (
       <ContactContext.Provider
           value = {{
           contacts:state.contacts,
           addContact
           }} >
           {props.children}
       </ContactContext.Provider>

   )
        }

export default ContactState