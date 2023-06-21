import styles from './FilterSection.module.css'

const FilterSection = ({ title, items }) => {
	return (
		<div>

			<h3>{title}</h3>

			{
				items.map((consulta, index) => {

					return (
						<div key={index} className={styles.especiality_item}>
							<div className={styles.especiality_item_left}>
								<div className={styles.checkbox}></div>
								<span>{consulta}</span>
							</div>

							<div className={styles.count}>
								{Math.floor(Math.random() * (99 - 10 + 1)) + 10}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default FilterSection;