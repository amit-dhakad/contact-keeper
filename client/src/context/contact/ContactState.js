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
        ],
        current: null
    }

    const  [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    const addContact = contact => {
        contact.id = uuid();
        dispatch({type:ADD_CONTACT, payload:contact})
    }
    //Delete Contact

    const deleteContact = id => {
        dispatch({type:DELETE_CONTACT, payload:id})
    }
   // Set  Current Contact
   const setCurrent = contact => {
    dispatch({type:SET_CURRENT, payload:contact})
}
  // Clear Current contact

  const clearCurrent = () => {
    dispatch({type:CLEAR_CURRENT})
}
   // Update contacts
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }

   // Clear filter

   return (
       <ContactContext.Provider
           value = {{
           contacts:state.contacts,
           current: state.current,
           addContact,
           updateContact,
           deleteContact,
           setCurrent,
           clearCurrent
           }} >
           {props.children}
       </ContactContext.Provider>

   )
        }

export default ContactState