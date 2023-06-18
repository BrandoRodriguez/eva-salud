import Phone from '@components/icons/Phone';
import styles from './AtencionTelefonica.module.css'

const AtencionTelefonica = () => {

	const PoolPhone = '912345678';

	return (
		<div className={styles.phone_section}>
			<div className={styles.phone_circle}>
				<Phone fill={'#fff'} />
			</div>
			<div>
				<h3 className={styles.title_phone}>Atención Telefónica</h3>
				<a className={styles.phone} href={`tel:+34${PoolPhone}`}>{PoolPhone}</a>
			</div>
		</div>
	)
}

export default AtencionTelefonica