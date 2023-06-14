import { Component, useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     filter: '',
  //   };
  // }

  export const App = () => {

    const [contacts, changeContact] = useState([
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],);
  

    const [filter, executeFilter] = useState("");


    // useEffect(() => {
    //   // Do stuff when value prop changes
    // }, [value]);

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

    // newContact (ev => ({  
    //        ...contacts,
    //         ...ev
    //       }));
       
   executeFilter = (ev) => (
      ev.target.value );
  

  const foundContacts = () => { 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = id => {
  changeContact(contacts.filter(({contact}) => contact.id !== id))
  }
  const addContactToLocalStore = () => {
    localStorage.setItem('phoneContacts', JSON.stringify(contacts));
  };

    // componentDidMount() {
    //   let getContacts = localStorage.getItem('phoneContacts');

    //  getContacts
    //    ? this.setState({ contacts: JSON.parse(getContacts) })
    //     : this.addContactToLocalStore();
    // }

  useEffect(() => {
       addContactToLocalStore();
    }, [contacts]);
 
    return (
      <div> 
        {  <ContactForm newContact={ newContact} />  }

        { <Filter filter={filter} executeFilter={ executeFilter} />  }
        <ContactList
          contacts={foundContacts()}
          removeContact={ removeContact}
        />
      </div>
    );
  }
 
