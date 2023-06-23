import styles from './Details3.module.css'
import decesos_details1 from '@assets/imgs/decesos_details1.webp'
import DetailsOptions from './DetailsOptions/DetailsOptions';
import { Title45 } from '@UI/Tags/Titles';

const Details3 = () => {

	return (
		<section className={`${styles.details} container`}>
			{
				<>
					<img src={decesos_details1} alt={''} />

					<div className={styles.content}>
						<Title45>Titulo Prueba</Title45>
						<DetailsOptions options={[
							{title: 'title', description: 'Ingresa en nuestro formulario a cuantas personas necesitas incluir en el seguro.'},
							{title: 'title', description: 'Ingresa en nuestro formulario a cuantas personas necesitas incluir en el seguro.'},
							{title: 'title', description: 'Ingresa en nuestro formulario a cuantas personas necesitas incluir en el seguro.'},
							{title: 'title', description: 'Ingresa en nuestro formulario a cuantas personas necesitas incluir en el seguro.'},
							]} />
					</div>
				</>
			}

		</section>
	)
}

export default Details3;