import styles from './form.module.css';
import { useState } from 'react';
import Input from './input/input';
import Image from 'next/image';

type InputEvent = React.ChangeEvent<HTMLInputElement>

type Props = {
    onFormError: Function,
    onFormSuccess: Function
}

export default function Form( { onFormError, onFormSuccess }:Props) {
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [validEmailAddress, setValidEmailAddress] = useState(false);
    const [businessName, setBusinessName] = useState('');
    const [validBusinessName, setValidBusinessName] = useState(false);
    const [businessWebsite, setBusinessWebsite] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [displaySpinner, setDisplaySpinner] = useState(false);

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
        setDisplaySpinner(true);
        setIsSubmitted(true);
        event.preventDefault();

        // checking all required inputs
        const isValid = validName && validEmailAddress && validBusinessName;

        if (isValid) {
            const text_body = `Name: ${name}\nEmail Address: ${emailAddress}\nBusiness Name: ${businessName}\nBusiness Website: ${businessWebsite ? businessWebsite : 'N/A'}`;
            const html_body = `<p><b>Name:</b> ${name}</p><p><b>Email Address:</b> ${emailAddress}</p><p><b>Business Name:</b> ${businessName}</p><p><b>Business Website:</b> ${businessWebsite ? businessWebsite : 'N/A'}</p>`;

            fetch('/api/send_email', {
                method: 'POST',
                body: JSON.stringify({
                    text: text_body,
                    html: html_body
                })
            }).then((res) => {
                if (res.status == 201) {
                    setName('');
                    setEmailAddress('');
                    setBusinessName('');
                    setBusinessWebsite('');
                    setIsSubmitted(false);
                    onFormSuccess();
                } else {
                    onFormError();
                }
            }).catch((err) => {
                onFormError();
            }).finally(() => {
                setDisplaySpinner(false);
            })
        } else {
            setDisplaySpinner(false);
        }
    }

    const buttonText = displaySpinner ?  <Image src="/spinner_icon.svg" height={16} width={16} alt="social media services"/> : 'Submit'

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
                        {buttonText}
                    </button>
                </span>
            </form>
        </div>

    )
}