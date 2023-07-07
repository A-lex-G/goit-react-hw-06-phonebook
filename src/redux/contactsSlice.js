import { contactsInitState } from "./constants";

export const contactsReducer = (state = contactsInitState, action) => {
    switch (action.type) {
        case "contact/AddContact":
            if (state.map(contact => contact.name).includes(action.payload.name)) {
                window.alert(`${action.payload} is already in contacts`);
                return;
            } else {
                return [...state, action.payload];
            };
        case "contact/DelContact":
            return state.filter(contact => contact.id !== action.payload);
        default:
            return state;
    }
};

export const addContact = value => {
    return {
        type: "contact/AddContact",
        payload: value,
    }
};

export const delContact = idValue => {
    return {
        type: "contact/DelContact",
        payload: idValue,
    }
};