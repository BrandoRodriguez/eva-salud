import Star from '@components/icons/Star'
import styles from './Stars.module.css'
import Star2 from '@components/icons/Star2'


const Stars = ({ count, width, height, rounded = false }) => {

	return (
		<div className={styles.stars_container}>
			{
				[...Array(count).keys()].map((index) => {
					return rounded ? (
						<Star key={index} width={width} height={height} />
					) : (
						<Star2 key={index} width={width} height={height} />
					)

				})
			}
		</div>
	)
}

export default Stars