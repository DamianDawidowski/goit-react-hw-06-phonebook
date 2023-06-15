 import { useEffect, useState } from 'react'; 
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
  
  export const App = () => {

    const [contacts, changeContact] = useState(
      JSON.parse(window.localStorage.getItem("phoneContacts")) ?? [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],);
  

    const [filter, setFilter] = useState("");
  
 const newContact = (ev => {
    const loweredcaseName = ev.name.toLowerCase().trim();

    const ifExists =  contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredcaseName
    );

    if (ifExists) {
      alert(`${ev.name} is already in contacts!`);
    } else {
      changeContact(contacts  => ({ 
         ...contacts,
          ...ev
        }));
    }})
 
    const filterName = (e) => {
      e.preventDefault();
      setFilter(e.target.value); 
    };
 

  useEffect(() => {
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
 }, [filter]);

 useEffect(() => {
  addContactToLocalStore();
}, [contacts]);


  const removeContact = idToDelete => {
  changeContact(contacts.filter(({id}) =>  id !== idToDelete))
  }
  const addContactToLocalStore = () => {
    localStorage.setItem('phoneContacts', JSON.stringify(contacts));
  };
  
    return (
      <div> 
        {  <ContactForm newContact={ newContact} />  } 
        { <Filter filter={filter} filterName={ filterName} />  }
        <ContactList 
          contacts={contacts}
          removeContact={ removeContact}
        />
      </div>
    );
  }
 
