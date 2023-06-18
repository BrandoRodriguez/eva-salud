import TopSection from '@UI/TopSection/TopSection';
import styles from './Blog.module.css'


const Blog = () => {

	return (
		<section className={styles.blog}>
			
			<TopSection 
			subtitle={['Blog de Eva Salud', 'Juntos por tu bienestar.']}
			description={'Conoce todas las novedades y descubre los mejores trucos para sacarle el máximo provecho a Eva Salud.'}
			button_text={'Ver todos los Artículos'}
			/>

		</section>
	)
}

export default Blog;