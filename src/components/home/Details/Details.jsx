import styles from './Details.module.css'
import decesos_details1 from '@assets/imgs/decesos_details1.webp'
import DetailsOptions from './DetailsOptions/DetailsOptions';
import { Title45 } from '@UI/Tags/Titles';
import { useLanguage } from '@context/LanguageContext/useLanguage';
import { DetailsText } from '@mocks/Pages/Home';

const Details = () => {

	const {language} = useLanguage()
	const content = DetailsText[language]

	return (
		<section className={`${styles.details} container`}>
			{
				content.length !== 0 && (
					<>
						<img src={decesos_details1} alt={''}/>

						<div className={styles.content}>
							<Title45>{content.title}</Title45>
							<DetailsOptions options={content.list_info}/>
						</div>
					</>
				)
			}

		</section>
	)
}

export default Details;