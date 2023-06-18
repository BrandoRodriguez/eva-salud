import { Link } from 'react-router-dom'
import styles from './NextButton.module.css'
import Arrow_right from '@components/icons/Arrow_right';

const NextButton = () => {
	return (
		<Link
			to= ''
			className={styles.next_button}
		>
			<Arrow_right fill={'#fff'} width={12} height={9} />
		</Link>
	)
}

export default NextButton;