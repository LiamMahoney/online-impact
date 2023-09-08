import styles from './styles.module.css';
import { useState } from 'react';
import Input from './input/input';

type InputEvent = React.ChangeEvent<HTMLInputElement>

export default function Form() {
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [validEmailAddress, setValidEmailAddress] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [validBusinessName, setValidBusinessName] = useState(false);
    const [businessWebsite, setBusinessWebsite] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleNameChange(e: InputEvent) {
        setName(e.target.value);
        validateName(e.target.value);
    }

    function validateName(value:string) {
        if (value.length > 0) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailAddress(e.currentTarget.value);
        validateEmail(e.currentTarget.value);
    }

    function validateEmail(value:string) {
        if (value.match(/\w+@\w+\.\w{2,}/)) {
            setValidEmailAddress(true);
        } else {
            setValidEmailAddress(false);
        }
    }

    function handleBusinessNameChange(e: InputEvent) {
        setBusinessName(e.target.value);
        validateBusinessName(e.target.value);
    }

    function validateBusinessName(value:string) {
        if (value.length > 0) {
            setValidBusinessName(true);
        } else {
            setValidBusinessName(false);
        }
    }

    function handleBusinessWebsiteChange(e: InputEvent) {
        setBusinessWebsite(e.target.value);
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        setIsSubmitted(true);
        event.preventDefault();

        // checking all required inputs
        const isValid = validName && validEmailAddress && validBusinessName;

        if (isValid) {
            //TODO:
            console.log(`submitting form.\nname: ${name}\nemailAddress: ${emailAddress}\nbusinessName: ${businessName}\nbusinessWebsite: ${businessWebsite}`)
        } else {
            console.log(`**NOT** submitting form.\nname: ${name}\nemailAddress: ${emailAddress}\nbusinessName: ${businessName}\nbusinessWebsite: ${businessWebsite}`)
        }
    }

    return (
        <div className={styles.formContainer}>
            <form noValidate className={styles.Form} onSubmit={handleFormSubmit}>
                <span className={styles.headerLabel}>
                    <h1>Work With Us</h1>
                </span>
                <h3>Personal Information</h3>
                <Input
                    id="name"
                    label="Name"
                    type="text"
                    required={true}
                    value={name}
                    onChange={handleNameChange}
                    submitted={isSubmitted}
                    valid={validName}
                    invalidMessage='Provide a value'
                />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    required={true}
                    value={emailAddress}
                    onChange={handleEmailChange}
                    submitted={isSubmitted}
                    valid={validEmailAddress}
                    invalidMessage='Provide a valid email address'
                />
                <h3>Business Information</h3>
                <Input
                    id="businessName"
                    label="Business Name"
                    type="text"
                    required={true}
                    value={businessName}
                    onChange={handleBusinessNameChange}
                    submitted={isSubmitted}
                    valid={validBusinessName}
                    invalidMessage='Provide a value'
                />
                <Input
                    id="website"
                    label="Business Website"
                    type="text"
                    required={false}
                    value={businessWebsite}
                    onChange={handleBusinessWebsiteChange}
                    submitted={isSubmitted}
                    valid={true}
                    invalidMessage='Provide a value'
                />
                <span className={styles.buttonContainer}>
                    <button className={styles.homeButton}>
                        Submit
                    </button>
                </span>
            </form>
        </div>

    )
}