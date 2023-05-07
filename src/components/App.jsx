import React from 'react';
import Form from './form/form';
import Contacts from './contacts/contacts';
import Search from './search/search';
import { nanoid } from 'nanoid';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = (name, number) => {
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <section>
        <Form onSubmit={this.addContact} />
        <Search
          filterQuery={this.state.filter}
          filter={this.handleFilterChange}
        />
        <Contacts contacts={filteredContacts} onDelete={this.deleteContact} />
      </section>
    );
  }
}

export default App;
