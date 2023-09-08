import styles from './styles.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
    id?: string
}

export default function ContentContainer({ children, id }:Props) {
    return (
        <div className={styles.container} id={id ? id : undefined}>
            <div className={styles.contentContainer}>
                { children }
            </div>
        </div>
    )
}
