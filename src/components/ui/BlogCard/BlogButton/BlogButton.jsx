import { Link } from 'react-router-dom'
import styles from './BlogButton.module.css'

const BlogButton = ({ category, style = {} }) => {
	return (
		<Link className={styles.blog_button} to='' style={style}>
			{category}
		</Link>
	)
}

export default BlogButton;