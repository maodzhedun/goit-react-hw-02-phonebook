import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    console.log(name);
    console.log(contacts);
    console.log(number);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Number
              <input
                type="text"
                name="number"
                value={number}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}: {contact.number}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
