import { createSlice} from '@reduxjs/toolkit';
 
 

const contactSlice = createSlice({
  name: 'contacts',
  initialState:  JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  reducers: {
    addNewContact: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
    deleteContact: (state, action) => {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addNewContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;