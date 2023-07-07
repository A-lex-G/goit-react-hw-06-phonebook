import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchInput } from "./SearchInput/SearchInput";

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <SearchInput/>
      <ContactsList/>
    </>
  );
}
  