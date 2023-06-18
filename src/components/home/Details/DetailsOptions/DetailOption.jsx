import styles from './DetailOption.module.css'
import { Title20 } from '@UI/Tags/Titles';
import { Text18 } from '@UI/Tags/Texts';
import CircleLine from '@UI/CircleLine/CircleLine';

const DetailOption = ({ number, title, description, line = true }) => {

	return (
		<div data-aos='fade-left' className={styles.detail_option}>
			<CircleLine number={number} line={line}/>

			<div className={styles.subtitle_container}>
				<Title20>{title}</Title20>
				<Text18>{description}</Text18>
			</div>

		</div>
	)
}

export default DetailOption;