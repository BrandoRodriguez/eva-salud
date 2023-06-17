import { Title25 } from '@UI/Tags/Titles'
import styles from './FundationCard.module.css'
import { useMediaQuery } from 'react-responsive'
import { Text18 } from '@UI/Tags/Texts'


const FundationCard = ({img, title, description, delay}) => {

    const isDesktop = useMediaQuery({ minWidth: 1024 })

    return (
        <div data-aos='fade-up' data-aos-delay={isDesktop ? delay : ''} className={styles.card_container}>
            
            <div className={styles.image_container}>
                <img src={img} alt={''}/>
            </div>
            
            <div className={styles.description_container}>
                <Title25>{title}</Title25>
                <Text18>{description}</Text18>
            </div>

        </div>
    )
}

export default FundationCard;