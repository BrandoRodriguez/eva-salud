import Close from '@components/icons/Close';
import styles from './ModalStyle2.module.css'

const ModalStyle2 = ({ children, closeModal }) => {
	return (
		<div className={`${styles.fundation_modal}`} onClick={closeModal}>
			<div
				className={`${styles.fundation_cards} container`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.close_btn_container} onClick={closeModal}>
					<p>Cerrar</p>
					<div>
						<Close stroke="#5E6788" width={10} height={10} />
					</div>
				</div>

				{
					children
				}

			</div>
		</div>
	)
}

export default ModalStyle2;