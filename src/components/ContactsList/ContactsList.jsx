import React from "react";
import css from "./ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { delContact, getContactsArr } from "redux/contactsSlice";
import { getFilterVal } from "redux/filterSlice";

const getVisibleContacts = (contacts, filter) => {
    
    if (contacts.length > 0) {

        switch (true) {

            case filter !== "":
                return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
            
            default:
                return contacts;
        }
    } else {

        return [];
    }
}

export const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContactsArr);

    const filter = useSelector(getFilterVal);
    
    const visibleContacts = getVisibleContacts(contacts, filter);

    const handleDeleteContact = (idValue) => dispatch(delContact(idValue));
    
    return (
        <>
            <ul>
                {visibleContacts.map((contact) => (
                    <li
                        className={css.list_item}
                        key={contact.id}>
                        <p>
                            {contact.name}: <span>{contact.number}</span>
                        </p>
                        <button
                            className={css.deleteBtn}
                            onClick={() => handleDeleteContact(contact.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};