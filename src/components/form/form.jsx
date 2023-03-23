import { Component } from 'react';
import PropTypes from 'prop-types';
import './fomr.css';

export class FormCreateContact extends Component {
  createNewContact = ev => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const number = ev.target.number.value;
    if (number.length !== 7) {
      alert('Please, input valid phonenumber with 7 simbols');
      return;
    }
    this.props.setNewState({ name, number, ev });
  };

  render() {
    return (
      <form onSubmit={this.createNewContact} className="form-contact">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className="create-contact">
          Add contact
        </button>
      </form>
    );
  }
}

FormCreateContact.propTypes = {
  setNewState: PropTypes.func,
};
