import { createReducer } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, setFilter } from "./actions";

 
const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
 
  console.log(contactsInitialState)

const contactsReducer = createReducer(contactsInitialState, {
    [addNewContact]: (state, action) => {
        const newState = [...state, action.payload];
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
      },

    [deleteContact]: (state, action) => {
        const newState = state.filter(contact => contact.id !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
      },
    });
  
  const filterReducer = createReducer("", {
    [setFilter]: (state, action) => (state = action.payload),
});
  
  export { contactsReducer, filterReducer }; 