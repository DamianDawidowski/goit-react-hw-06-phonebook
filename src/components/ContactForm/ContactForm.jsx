import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    const { newContact } = this.props;
    const number = event.target.number.value;
    const name = event.target.name.value;
    newContact({ id: nanoid(), name, number });
    event.target.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleFormSubmit}>
        <h1>Phonebook</h1>
        <div className={css.container}>
          <label className={css.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            className={css.formImput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.formLabel}>Number</label>
          <input
            type="tel"
            name="number"
            className={css.formImput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  newContact: PropTypes.func.isRequired,
};
export default ContactForm;