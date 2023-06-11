import { Component } from 'react';
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

  const App = () => {
    const [contacts, newContact] = useState([
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],);

  newContact = ev => {
    const loweredcaseName = ev.name.toLowerCase().trim();

    const ifExists = this.state.contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredcaseName
    );

    if (ifExists) {
      alert(`${ev.name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, ev],
      }));
    }
  };

  executeFilter = ev => {
    this.setState({ filter: ev.currentTarget.value });
  };

  foundContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  addContactToLocalStore = () => {
    localStorage.setItem('phoneContacts', JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    let getContacts = localStorage.getItem('phoneContacts');

    getContacts
      ? this.setState({ contacts: JSON.parse(getContacts) })
      : this.addContactToLocalStore();
  }

  componentDidUpdate() {
    this.addContactToLocalStore();
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <ContactForm newContact={this.newContact} />

        <Filter filter={filter} executeFilter={this.executeFilter} />
        <ContactList
          contacts={this.foundContacts()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
