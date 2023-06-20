
import styles from './Testimonial.module.css'
import { useMediaQuery } from 'react-responsive';
import { TestimonialText } from '@mocks/Pages/Home';
import testimony1 from '@assets/imgs/testimony1.webp'
import testimony2 from '@assets/imgs/testimony2.webp'
import testimony3 from '@assets/imgs/testimony3.webp'
import { Title45 } from '@UI/Tags/Titles';
import { Text20 } from '@UI/Tags/Texts';
import TestimonialForm from '@UI/testimonialform/TestimonialForm';
import { useLanguage } from '@context/LanguageContext/useLanguage';
import TestimonialCard from './testimonialcard/TestimonialCard';

const Testimonial = () => {

    const isDesktop = useMediaQuery({ minWidth: 1024 })
    const imgs = [testimony1, testimony2, testimony3]

    const { language } = useLanguage()
    const content = TestimonialText[language]


    return (
        <section className={`${styles.testimonial} container`} data-aos='fade-right'>

            <div className={styles.content}>
                <div className={styles.subtitle}>{content.subtitle}</div>

                <Title45>{content.title}</Title45>
                <Text20>
                    {content.description}
                </Text20>

            </div>

            <div className={styles.cards_container}>

                {
                    isDesktop && <TestimonialForm />
                }

                <div className={styles.cards}>

                    {
                        content.cards.map((card, index) => {
                            return <TestimonialCard
                                key={index}
                                img={imgs[index]}
                                name={card.name}
                                occupation={card.city}
                                description={card.description}
                                star={5}
                            />
                        })
                    }

                </div>

            </div>


        </section>
    )
}

export default Testimonial;