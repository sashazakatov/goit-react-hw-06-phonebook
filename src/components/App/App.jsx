import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from 'components/ContactList'

const App = () => {
  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h1>Contacts</h1>
    <Filter/>
    <ContactList/>
    </div>
  );
}
export default App