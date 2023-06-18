import styles from './Subscribe.module.css'
import green_circle from '@assets/imgs/green_circle.webp'
import orange_circle from '@assets/imgs/orange_circle.webp'
import macetero from '@assets/imgs/macetero.webp'
import NextButton from './NextButton/NextButton'
import { useMediaQuery } from 'react-responsive'
import { Title20, Title45 } from '@UI/Tags/Titles'
import { Text20 } from '@UI/Tags/Texts'

const Subscribe = () => {

	const isDesktop = useMediaQuery({ minWidth: 1024 })

	return (
		<section data-aos="zoom-in" className={`${styles.subscribe}`}>

			<div className={styles.subscribe_container}>

				<div className={styles.forms}>

					<div className={styles.green_circle}>
						<img src={green_circle} alt={''} />
					</div>

					{
						isDesktop && (
							<>
								<div className={styles.macetero}>
									<img src={macetero} alt={''} />
								</div>

								<div className={styles.orange_circle}>
									<img src={orange_circle} alt={''} />
								</div>
							</>
						)
					}

				</div>


				<div className={styles.content}>
					<Title20>¡Entérate el primero!</Title20>
					<Title45>Suscríbete a nuestra newsletter</Title45>
					<Text20>No se pierda nuestra información más reciente sobre las tendencias del mercado</Text20>
				</div>

				<div className={styles.input_container}>
					<input type="text" placeholder='Introduce tu correo electrónico' />
					<NextButton />
				</div>

			</div>

		</section>
	)
}

export default Subscribe;