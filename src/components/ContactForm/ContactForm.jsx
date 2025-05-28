import { Component } from 'react';
import { FormEl } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.setState({ name: '', number: '' });
    this.props.AddContact(name, number);
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormEl>
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
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </FormEl>
    );
  }
}

export default ContactForm;
