import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

import { combineReducers } from "redux";

// export const contactsReducer = (state = contactsInitState, action) => {
//     switch (action.type) {
//         case "contact/AddContact":
//             if (state.map(contact => contact.name).includes(action.payload.name)) {
//                 window.alert(`${action.payload} is already in contacts`);
//                 return;
//             } else {
//                 return [...state, action.payload];
//             };
//         case "contact/DelContact":
//             return state.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// };

// export const filterReducer = (state = filterInitState, action) => {
//   switch (action.type) {
//     case "filter/UpdFilter":
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});