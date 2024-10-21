import { useEffect, useState } from 'react'
import ContactList from './ContactList'
import FilterResults from './FilterResults'

export interface Contact {
  id: number,
  name: string,
  email: string,
  phone: string,
  company: string,
  address: string,
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [count, setCount] = useState(10);

  function onFilter(newCount: number) {
    if (newCount < 0) {
      setCount(0);
      return;
    }
    if (newCount > contacts.length) {
      setCount(contacts.length);
      return;
    }
    setCount(newCount);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setContacts(data.map((receivedContacts: any) => {
          return {
            id: receivedContacts.id,
            name: receivedContacts.name,
            email: receivedContacts.email,
            phone: receivedContacts.phone,
            company: receivedContacts.company.name,
            address: `${receivedContacts.address.street}, ${receivedContacts.address.city} `
          }
        }));
      })
  }, [])

  return (
    <div className='flex justify-center'>
      <main className='flex flex-col w-1/2 pt-5 pb-7'>
        <h1 className="text-3xl font-bold w-full text-center pb-5">
          Contact List
        </h1>
        <ContactList contacts={contacts} showCount={count} />
        <FilterResults count={count} total={contacts.length} onFilter={onFilter} />
      </main>
    </div>
  )
}
