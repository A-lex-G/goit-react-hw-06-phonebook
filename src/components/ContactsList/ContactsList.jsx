import React from "react";
import css from "./ContactsList.module.css";
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { delContact } from "redux/contactsSlice";

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

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
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

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.exact({
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//             contactId: PropTypes.string.isRequired,
//         })
//     ).isRequired
// }