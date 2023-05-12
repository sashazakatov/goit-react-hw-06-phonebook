import { useState } from 'react'
import PropTypes from "prop-types";
import css from './ContactForm.module.css'

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [numder, setNumder] = useState('');

    const handelSubmit = (e) => {
        onSubmit(e);
        setName('');
        setNumder('');
    }
    return(
        <form  
            className={css.form}
            onSubmit={handelSubmit}>
        <label className={css.lable}>
        Name
        <input
            className={css.input}
            type="text"
            name="name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label className={css.lable}>
        Numder
        <input
            className={css.input}
            type="tel"
            name="number"
            onChange={(e)=>setNumder(e.target.value)}
            value={numder}
            maxLength="35"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button className={css.button} type="submit">Add contact</button>
        </form>
    )
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default ContactForm;