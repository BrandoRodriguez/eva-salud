import { Title20 } from '@UI/Tags/Titles';
import styles from './Card.module.css'

const Card = ({ title, children }) => {
	return (
		<div className={styles.card}>

			<Title20>{title}</Title20>

			<ul>
				{
					children.map((anchor, index) => {
						return <li key={index}>{anchor}</li>
					})
				}
			</ul>

		</div>
	)
}

export default Card;