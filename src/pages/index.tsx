import styles from '@/styles/Home.module.css'
import FullLogo from '@/components/logo/full_logo'
import { Inter } from 'next/font/google'
import WaveContainer from '@/components/wave_container/wave_container'
import ConvertImage from '@/components/convert/convert_image'
import SearchEngineImage from '@/components/search_engine/search_engine_image'
import SocialMarketingImage from '@/components/social_marketing/social_marketing_image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main className={[styles.main, inter.className].join(' ')}>
                <div className={styles.landingContianer}>
                    <FullLogo />
                    <div className={styles.buttonContainer}>
                        <a href="#services">
                            <button className={styles.homeButton}>Services</button>
                        </a>
                        <button className={styles.homeButton}>Contact</button>
                    </div>
                </div>
                <WaveContainer>
                    <div className={styles.contentContainer}>
                        <p className={styles.contentDescription}>Everything needs to work together like a beautifully synchronized like a Swiss watch. Paid ads across all channels do not and should not live in a silo. Therefore we closely analyze and monitor how each lever can work together to meet our profitability goals. </p>
                    </div>
                </WaveContainer>

                <div className={styles.servicesContainer}>
                    <p id="services" className={styles.header}>
                        Services
                    </p>
                    <div className={styles.serviceContainer}>
                        <SocialMarketingImage />
                        <div className={styles.serviceContentContainerEven}>
                            <p className={styles.serviceHeaderEven}>
                                Paid Social Marketing
                            </p>
                            <p className={styles.serviceDescription}>
                                We strategize the most efficient ways to use the media mix to profitably acquire new customers and continuously fill the marketing funnel. We don't just decide on ABO vs. CBOs, we analyze, and optimize your funnels for each channel from a technical, creative and user-flow perspective
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceContentContainerOdd}>
                            <p className={styles.serviceHeaderOdd}>
                                Google Ads + Youtube
                            </p>
                            <p className={styles.serviceDescriptionOdd}>
                                We create, monitor and continually test the best ways Google and Youtube can fit in the media mix to help us profitably acquire customers.
                            </p>
                        </div>
                        <SearchEngineImage />
                    </div>
                    <div className={styles.serviceContainer}>
                        <ConvertImage />
                        <div className={styles.serviceContentContainerEven}>
                            <p className={styles.serviceHeaderEven}>
                                Converting Creative
                            </p>
                            <p className={styles.serviceDescription}>
                                It is tough to sell a product or service without first generating interest. However, creatives are not only meant to generate interest, they are meant to do much more. Our speciality is not only to develop a creative strategy, but also create the ads to get people to convert.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    This is the footer. TODO:¬
                </div>
            </main>
        </>
    )
}
