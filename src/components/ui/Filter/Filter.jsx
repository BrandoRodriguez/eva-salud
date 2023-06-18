import Button from '@UI/ButtonDecesos/Button'
import styles from './Filter.module.css'

const Filter = ({ items }) => {

	console.log({ items })
	return (
		<div className={styles.bg}>
			<div >
				<div className={styles.title_container}>
					<h1>+300 Consultas Médicas <b>Disponibles Ahora</b></h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?
					</p>
				</div>
			</div>

			<div className={styles.search}>
				<div className={styles.selects}>

					{
						items.map((item, index) => {

							return (

								<div className={styles.select} key={index}>
									{
										item
									}
								</div>
							)

						})
					}

				</div>

				<Button>
					Buscar
				</Button>
			</div>
		</div>
	)
}

export default Filter