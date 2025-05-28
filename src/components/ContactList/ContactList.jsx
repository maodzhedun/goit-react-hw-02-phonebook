import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact}/>
      ))}
    </List>
  );
};

export default ContactList;
