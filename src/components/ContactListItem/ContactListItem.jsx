import { Item } from "./ContactListItem.styled";

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <Item key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
    </Item>
  );
};

export default ContactListItem;
