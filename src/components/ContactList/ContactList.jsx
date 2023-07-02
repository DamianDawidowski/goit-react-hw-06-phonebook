import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
 

export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
 
  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactsSingle} key={id}>
            <p className={css.contactsInfo}>{name}</p>
            <p className={css.contactsInfo}> {number}</p>
            <button
              onClick={() => {
                removeContact(id);
              }}
              className={css.contactsBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};
