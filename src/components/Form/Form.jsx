import css from "./Form.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContactsArr } from "redux/contactsSlice";

export const Form = () => {
    
    const dispatch = useDispatch();

    const contacts = useSelector(getContactsArr);

    const nameInputId = nanoid();

    const numberInputId = nanoid();

    const handleSubmitForm = (e) => {

        e.preventDefault();

        const form = e.target;
        
        const { value } = form.elements.name;

        if ((contacts.map(contact => contact.name)).includes(value)) {
            window.alert(`${value} is already in contacts`)
            return
        };

        const contactData = {
            [form.elements.name.name]: value,
            [form.elements.number.name]: form.elements.number.value,
            id: nanoid(),
        }        
        
        dispatch(addContact(contactData));

        form.reset();
    };

    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmitForm}
                action="">
                <label
                    className={css.input_title}
                    htmlFor={nameInputId}>
                    Name
                </label>
                <input
                    className={css.form_input}
                    name="name"
                    id={nameInputId}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label
                    className={css.input_title}
                    htmlFor={numberInputId}>
                    Number
                </label>
                <input
                    className={css.form_input}
                    name="number"
                    id={numberInputId}
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button
                    className={css.submit_Btn}
                    type="submit">
                    Add contact
                </button>
            </form>
        </>
    );
}