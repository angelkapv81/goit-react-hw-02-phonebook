import PropTypes from 'prop-types';
import style from './form.module.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();
    const numberId = nanoid();
    return (
      <div className={style.contactsBlock}>
        <h1 className={style.contactPhonebook}>Phonebook</h1>
        <form className={style.contactBook} onSubmit={this.handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <input
            placeholder="ім'я"
            className={style.contactForm}
            id={nameId}
            value={name}
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={numberId}>Number</label>
          <input
            placeholder="телефон"
            className={style.contactForm}
            id={numberId}
            value={number}
            type="tel"
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={style.contactAdd} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
