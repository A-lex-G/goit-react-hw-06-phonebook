import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        delContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;

export const getContactsArr = state => state.contacts;