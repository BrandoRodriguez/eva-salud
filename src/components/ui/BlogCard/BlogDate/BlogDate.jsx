import Calendar from '@components/icons/Calendar'
import styles from './BlogDate.module.css'
import Clock from '@components/icons/Clock'

const BlogDate = ({date, last_read}) => {

	return (

		<div className={styles.data_wrapper}>

			<div className={styles.data}>
				<Calendar />
				<span className={styles.data_title}>{date}</span>
			</div>

			<div className={styles.data}>
				<Clock />
				<span className={styles.data_title}>{last_read}</span>
			</div>

		</div>

	)
}

export default BlogDate