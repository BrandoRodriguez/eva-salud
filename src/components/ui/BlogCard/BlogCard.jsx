
import { useMediaQuery } from 'react-responsive';
import styles from './BlogCard.module.css';
import { Title18 } from '@UI/Tags/Titles';
import { Text14 } from '@UI/Tags/Texts';
import BlogButton from './BlogButton/BlogButton';
import BlogDate from './BlogDate/BlogDate';

const BlogCard = ({ img, title, description, category, date, last_read, delay }) => {

	const isDesktop = useMediaQuery({ minWidth: 1024 })

	return (

		<div data-aos='fade-up' data-aos-delay={isDesktop ? delay : ''} className={styles.blog_card}>

			<div className={styles.image}>
				<img src={img} alt={''}/>
			</div>

			<div className={styles.content}>
				<Title18>{title}</Title18>
				<Text14>{description}</Text14>
			</div>

			<div className={styles.footer}>

				<BlogButton category={category} />
				<BlogDate date={date} last_read={last_read}/>

			</div>
		</div>

	)
}

export default BlogCard;