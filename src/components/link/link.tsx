import styles from './styles.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
    href: string
}

export default function Link({ children, href }:Props) {
    return (
        <a className={styles.link} href={href}>
            { children }
        </a>
    )
}
