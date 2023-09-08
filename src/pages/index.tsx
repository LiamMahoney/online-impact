import styles from '@/styles/Home.module.css'
import FullLogo from '@/components/logo/full_logo'
import { Content, Inter } from 'next/font/google'
import WaveContainer from '@/components/wave_container/wave_container'
import ContentContainer from '@/components/content_container/content_container'
import Form from '@/components/form/form'
import Link from '@/components/link/link'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={[styles.main, inter.className].join(' ')}>
                <ContentContainer>
                    <div className={styles.landingContainer}>
                        <FullLogo />
                        <p className={styles.landingDescription} >
                            Your partner in profitable growth
                        </p>
                        <div className={styles.buttonContainer}>
                            <Link href="#services">
                                <button className={styles.homeButton}>Services</button>
                            </Link>
                            <Link href="#contact">
                                <button className={styles.homeButton}>Contact</button>
                            </Link>
                        </div>
                    </div>
                </ContentContainer>
                <WaveContainer>
                    <ContentContainer id="services">
                        <div className={styles.serviceContainer}>
                            <Image
                                src="/mobile.svg"
                                height={225}
                                width={225}
                                alt="social media services"
                            />
                            <div className={styles.serviceContentContainer}>
                                <p className={styles.serviceHeader}>
                                    Paid Social
                                </p>
                                <p className={styles.serviceDescription}>
                                    Includes Facebook, Instagram, TikTok, Snapchat, LinkedIn, Pinterest and Twitter
                                </p>
                            </div>
                        </div>
                        <div className={styles.serviceContainer}>
                            <div className={styles.serviceContentContainer}>
                                <p className={styles.serviceHeader}>
                                    Google Ads + Youtube
                                </p>
                                <p className={styles.serviceDescription}>
                                    We create, monitor and continually test the best ways Google and Youtube can fit in the media mix to help us profitably acquire customers.
                                </p>
                            </div>
                            <Image
                                src="/web_search.svg"
                                height={225}
                                width={225}
                                alt="google and youtube services"
                            />
                        </div>
                        <div className={styles.serviceContainer}>
                            <Image
                                src="/analytics.svg"
                                height={225}
                                width={225}
                                alt="converting creative services"
                            />
                            <div className={styles.serviceContentContainer}>
                                <p className={styles.serviceHeader}>
                                    Converting Creative
                                </p>
                                <p className={styles.serviceDescription}>
                                    Our specialty is not only to develop a creative strategy, but also create the ads to get people to convert.
                                </p>
                            </div>
                        </div>
                        <div className={styles.serviceContainer}>
                            <div className={styles.serviceContentContainer}>
                                <p className={styles.serviceHeader}>
                                    UGC
                                </p>
                                <p className={styles.serviceDescription}>
                                    Allow us to source & work with creators to deliver you consistent, quality ads without the sourcing headache.
                                </p>
                            </div>
                            <Image
                                src="/ugc.svg"
                                height={225}
                                width={225}
                                alt="user generated content services"
                            />
                        </div>
                    </ContentContainer>
                </WaveContainer>
                
                <ContentContainer>
                    <div className={styles.businessDescriptionContainer}>
                        <div className={styles.imageContainer}>
                            <img className={styles.founderImage} src="mike-lukas.png"></img>
                            <div className={styles.imageNotation}>
                                <p>Mike Lukas</p>
                                <p>Founder & Growth Marketer</p>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            <p className={styles.landingDescription}>There is no “one size fits all” approach to growth. Growth looks different for each business.</p>
                            <p className={styles.landingDescription}>We specialize in curating a marketing strategy that best suits your business’ goals. Whether you have never spent a dollar on paid ads, or are a 9 figure brand, we have experience in all levels of scale and are here to help you efficiently scale</p>
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer id="contact">
                    <Form />
                </ContentContainer>
                <div className={styles.footer}>
                    <div className={styles.footerSocialContainer}>
                        <span className={styles.socialIconContainer}>
                            <a 
                                target="_blank"
                                href="https://twitter.com/MikeLukashewich"
                            >
                                <Image
                                    src="twitter.svg"
                                    height={30}
                                    width={30}
                                    alt="twitter logo"
                                    className={styles.socialIcon}
                                />
                            </a>
                        </span>
                        <span className={styles.socialIconContainer}>
                            <a 
                                target="_blank"
                                href="https://www.linkedin.com/in/michaellukashewich"
                            >
                                <Image
                                    src="linkedin.svg"
                                    height={30}
                                    width={30}
                                    alt="linkedin logo"
                                    className={styles.socialIcon}
                                />
                            </a>
                        </span>
                    </div>
                    <p className={styles.copyright}>© 2023 Online Impact</p>
                </div>
            </main>
        </>
    )
}
