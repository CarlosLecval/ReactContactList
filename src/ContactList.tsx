import ContactItem from "./ContactItem";
import { Contact } from "./App";

interface Props {
  contacts: Contact[],
  showCount: number
}

export default function ContactList({ contacts, showCount }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {
        contacts.map((contact, index) => {
          if (index >= showCount) return;
          return <ContactItem key={contact.id} contact={contact} total={showCount} />
        })
      }
    </ul>
  );
}
