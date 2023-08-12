import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState({
    name: '',
    phone: '',
  });

  const hanldeSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact({ name: contacts.name, phone: contacts.phone }));
    form.reset();
  };

  const handleChange = e => {
    setContacts(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={hanldeSubmit} className={css.sectionInput}>
        <label className={css.labelInput}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label className={css.labelInput}>
          Number
          <input
            className={css.input}
            type="tel"
            name="phone"
            placeholder="Number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
