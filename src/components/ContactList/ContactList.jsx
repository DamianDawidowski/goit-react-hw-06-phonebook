import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
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
