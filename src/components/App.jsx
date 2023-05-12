import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from './ContactList'

const App = () => {
  const [contacts, setContacts] = useState(()=> 
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const deleteContact = (id) =>{
    setContacts((prevState)=> prevState.filter(contact => contact.id !== id) );
  }

  const isContactExists = (value) => {
    return contacts.find(({name}) => name.toLowerCase() === value.toLowerCase());
  }

  const hendelSubmit = (e) =>{
    e.preventDefault();
    const {name, number} = e.target;
    if(isContactExists(name.value)){
      alert(`${name.value} is already in contacts`);
      return;
    }
    setContacts((prevState) => [...prevState, {id:nanoid(), name: name.value, number: number.value}]);
  }

  const hendelFilter = () => {
    return contacts.filter(({name})=>name.includes(filter.toLowerCase()))
  }

  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={hendelSubmit}/>
    <h1>Contacts</h1>
    <Filter filter={filter} onFilter={setFilter} />
    <ContactList filteredArray={hendelFilter()} onDelete={deleteContact}/>
    </div>
  );
}
export default App