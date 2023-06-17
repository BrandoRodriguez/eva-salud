import styles from './TestimonialCard.module.css'
import { Title18 } from '@UI/Tags/Titles';
import { Text16 } from '@UI/Tags/Texts';
import Stars from '@UI/Stars/Stars';

const TestimonialCard = ({ img, name, occupation, description, star}) => {
  return (

      <div data-aos="fade-left" className={styles.card}>

        <div className={styles.top}>
          <img className={styles.author} src={img} alt={''}/>

          <div className={styles.name_container}>
            <Title18>{name}</Title18>
            <p className={styles.occupation}>{occupation}</p>
          </div>

          <Stars count={5} width={12} height={12} rounded/>

        </div>
          
        <Text16>{description}</Text16>
      </div>

  )
}

export default TestimonialCard;