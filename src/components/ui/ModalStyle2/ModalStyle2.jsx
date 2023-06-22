import Close from '@components/icons/Close';
import styles from './ModalStyle2.module.css'
import { useLanguage } from '@context/LanguageContext/useLanguage';
import { ModalStyle2Text } from '@mocks/General';

const ModalStyle2 = ({ children, closeModal }) => {

	const {language} = useLanguage()
	const content = ModalStyle2Text[language]
	return (
		<div className={`${styles.fundation_modal}`} onClick={closeModal}>
			<div
				className={`${styles.fundation_cards} container`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.close_btn_container} onClick={closeModal}>
					<p>{content.close_button}</p>
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