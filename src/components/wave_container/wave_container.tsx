import styles from './styles.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function WaveContainer({ children }:Props) {
    return (
        <div className={styles.container}>
            <svg id="visual" viewBox="0 0 900 50" width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="900" height="50" fill="#F2EAE3"></rect><path d="M0 21L25 23.5C50 26 100 31 150 31.2C200 31.3 250 26.7 300 24.3C350 22 400 22 450 20.7C500 19.3 550 16.7 600 15.2C650 13.7 700 13.3 750 13.5C800 13.7 850 14.3 875 14.7L900 15L900 51L875 51C850 51 800 51 750 51C700 51 650 51 600 51C550 51 500 51 450 51C400 51 350 51 300 51C250 51 200 51 150 51C100 51 50 51 25 51L0 51Z" fill="#ECE0D5" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            <div>
                {children}
            </div>
            <svg id="visual" viewBox="0 0 900 50" width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100%" fill="#ECE0D5"></rect><path d="M0 29L25 27.8C50 26.7 100 24.3 150 23.5C200 22.7 250 23.3 300 21.8C350 20.3 400 16.7 450 14.8C500 13 550 13 600 14.8C650 16.7 700 20.3 750 20.5C800 20.7 850 17.3 875 15.7L900 14L900 51L875 51C850 51 800 51 750 51C700 51 650 51 600 51C550 51 500 51 450 51C400 51 350 51 300 51C250 51 200 51 150 51C100 51 50 51 25 51L0 51Z" fill="#F2EAE3" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
        </div>
    )
}
