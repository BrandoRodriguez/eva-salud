import AtencionTelefonica from '@UI/AtencionTelefonica/AtencionTelefonica'
import styles from './Componente1.module.css'

const Componente1 = ({children}) => {
	return (
		<div className={styles.button_wrapper}>

			<div className={styles.container__button}>

				{children}

			</div>

			<AtencionTelefonica />
		</div>
	)
}

export default Componente1