import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ReactLogo from 'components/ReactLogo/ReactLogo';
import $localStorage from 'helpers/$localStorage';
import { Component } from 'react';
import './App.css';

const CONTACTS_STORAGE_KEY = 'phonebook-contacts';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Fermions Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    componentDidMount() {
        const storageContacts = $localStorage.get(CONTACTS_STORAGE_KEY);

        if (storageContacts) {
            this.setState({ contacts: storageContacts });
        } else {
            $localStorage.set(CONTACTS_STORAGE_KEY, this.state.contacts);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            $localStorage.set(CONTACTS_STORAGE_KEY, this.state.contacts);
        }
    }

    addContact = newContact => {
        const contact = this.state.contacts.find(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        if (contact) {
            alert(` ${contact.name} is already in contacts!`);
        } else {
            this.setState(prev => ({
                contacts: [...prev.contacts, newContact],
            }));
        }
    };

    handleFilterChange = e => {
        this.setState({ filter: e.target.value });
    };

    filterContacts = (contacts, filter) => {
        if (filter) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
            );
        }
        return contacts;
    };

    deleteContact = id => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== id),
        });
    };

    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = this.filterContacts(contacts, filter);

        return (
            <>
                <ReactLogo />
                <h1>Phonebook</h1>
                <ContactForm addContact={this.addContact} />

                <h2>Contacts</h2>
                <Filter onChange={this.handleFilterChange} value={filter} />
                <ContactList
                    contacts={filteredContacts}
                    deleteContact={this.deleteContact}
                />
            </>
        );
    }
}

export default App;
