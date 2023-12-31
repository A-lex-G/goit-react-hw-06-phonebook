import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({

    contacts: contactsReducer,

    filter: filterReducer,

})

const persistConfig = {

    key: 'root',

    storage,

    whitelist: ['contacts'],

};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

    reducer: persistedRootReducer,

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions:
                    [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER
                    ],
            },
        });
    }

});

export const persistor = persistStore(store);