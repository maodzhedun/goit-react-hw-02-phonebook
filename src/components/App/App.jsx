import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContainerApp } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  AddContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <ContainerApp>
        <div>
          <h1>Phonebook</h1>
          <ContactForm AddContact={this.AddContact} />
        </div>
        <div>
          <h2>Contacts</h2>

          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </ContainerApp>
    );
  }
}

export default App;
