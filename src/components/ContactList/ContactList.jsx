import PropTypes from 'prop-types';
import List from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>X</button>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
