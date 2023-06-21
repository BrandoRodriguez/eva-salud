import styles from './Card1.module.css'

const Card1 = ({children}) => {
  return (
	<div className={styles.card}>
		{children}
	</div>
  )
}

export default Card1;