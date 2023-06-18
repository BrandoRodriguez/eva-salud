import TopSection from '@UI/TopSection/TopSection';
import styles from './Blog.module.css';
import blog1 from '@assets/imgs/blog1.webp';
import blog2 from '@assets/imgs/blog2.webp';
import blog3 from '@assets/imgs/blog3.webp';
import blog4 from '@assets/imgs/blog4.webp';
import BlogCard from '@UI/BlogCard/BlogCard';

const Blog = () => {
	return (
		<section className={`${styles.blog}`}>

			<TopSection
				subtitle={['Blog de Eva Salud', 'Juntos por tu bienestar.']}
				description={'Conoce todas las novedades y descubre los mejores trucos para sacarle el máximo provecho a Eva Salud.'}
				button_text={'Ver Todos los Artículos'}
			/>

			<div className={styles.cards}>

				<BlogCard
					img={blog1}
					title={'Mascotas en el hogar, ¿Debo asegurarlas?'}
					description={'Conoce las obligaciones y recomendaciones respecto a los seguros de mascotas. Si tienes mascotas en casa, no te pierdas este artículo.'}
					category={'Seguros'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					delay={'200'}
					img={blog2}
					title={'Seguro agrario, una obligación desconocida'}
					description={'Son ciento los profesionales del sector primario que desconocen las obligaciones de poseer seguro agrario. Infórmate de todas las novedades.'}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					delay={'400'}
					img={blog3}
					title={'Novedades de 2023 en las pólizas de coche'}
					description={'2023 viene acompañada de novedades en el sector asegurador de los vehículos. Entra y conoce los servicios que marcarán las diferencias este año.'}
					category={'Seguros'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

				<BlogCard
					delay={'600'}
					img={blog4}
					title={'El cotizador de pólizas en línea que tienes que probar'}
					description={'En tiempos de crisis, tomar decisiones puede ser abrumador. Hay infinidad de planes de cobertura diferentes y múltiples rangos de precios para todos los presupuestos.'}
					category={'Marketing'}
					date={'29 May 2023'}
					last_read={'3 mins read'}
				/>

			</div>


		</section>
	)
}

export default Blog;