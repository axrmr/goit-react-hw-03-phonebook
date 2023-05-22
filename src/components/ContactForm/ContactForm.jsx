import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Form from './ContactForm.styled';

const INITIAL_VALUE = { name: '', number: '' };

class ContactForm extends Component {
  state = { ...INITIAL_VALUE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ ...INITIAL_VALUE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder='Enter name'
          required
        />
        <input
          type='tel'
          name='number'
          value={number}
          onChange={this.handleChange}
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          placeholder='Enter number'
          required
        />
        <button>Create</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
