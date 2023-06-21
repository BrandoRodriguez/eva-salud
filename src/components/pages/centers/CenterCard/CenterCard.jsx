import { Ubication } from '@UI/index'
import Professional from '@components/icons/Professional'
import styles from './CenterCard.module.css'
import Card1 from '@UI/Card1/Card1'

const CenterCard = () => {

	const professionals = ['Olalquiaga Loewe Francisco Javier', 'Chavarría Mur Francisco Javier', 'Olalquiaga Loewe Francisco Javier']

	return (

		<Card1>

			<div className={styles.top}>
				<img src={brand1} alt="" />
				<div>
					<h3 className={styles.card_title}>Policlínica el Mirador</h3>
					<div className="">
						<Ubication />
						<p>Calle Tellez 30, Madrid</p>
					</div>
				</div>
			</div>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>

			<h3 className="">Profesionales:</h3>

			{
				professionals.map((profesional, index) => {
					return (
						<div key={index}>
							<Professional />
							<p>{profesional}</p>
						</div>
					)
				})
			}
		</Card1>


	)
}

export default CenterCard