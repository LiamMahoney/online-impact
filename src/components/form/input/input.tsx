import styles from './styles.module.css';

type Props = {
    label: string,
    id: string,
    type: string,
    required: boolean,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    submitted: boolean,
    valid: boolean,
    invalidMessage: string
}

export default function Input({label, id, type, required, value, onChange, submitted, valid, invalidMessage}:Props) {
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e);
    }

    return (
        <>
            <label className={styles.label} htmlFor={id}>
                <span className={styles.labelText}>
                    {label}
                    {required ? <span aria-hidden={true} className={styles.requiredSymbol}>*</span> : null}
                </span>
                <span className={styles.invalidTextContainer}>
                    {!valid && submitted ? <span id={`${id}Error`} className={styles.invalidDescription}>{invalidMessage}</span> : null}
                </span>
            </label>
            <input
                id={id}
                type={type}
                required={required}
                value={value}
                onChange={handleChange}
                className={[styles.input, !valid && submitted ? styles.invalid_input : ''].join(' ').trim()}
                aria-describedby={id}
            />
        </>
    )
}