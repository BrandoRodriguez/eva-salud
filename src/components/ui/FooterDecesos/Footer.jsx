import Card from './Card';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";
import { Text16 } from '@UI/Tags/Texts';
import { OldFooterText } from '@mocks/General';
import { useLanguage } from '@context/LanguageContext/useLanguage';
import { getLogo } from '@utils/getLogo';
import { getVersion } from '@utils/functions';

const Footer = () => {

	const { language } = useLanguage()
	const content = OldFooterText[language]

	return (
		<section className={`${styles.footer} container`}>

			<div className={styles.footer_site}>

				<div className={styles.brand}>


					<div className={styles.logo_container}>
						{getLogo(language, 'color')}
					</div>

					<div className={styles.social}>
						<Text16>{content.social_title}</Text16>

						<p className={styles.subtitle}>{content.social_description}</p>

						<div className={styles.social_media}>
							<Link to="https://fb.watch/kYnAe-X5-u/" target='_blank' className={styles.facebook}></Link>
							<Link to="https://instagram.com/seguroseva?igshid=MmJiY2I4NDBkZg==" target='_blank' className={styles.instagram}></Link>

							{/* <Link to="" target='_blank' className={styles.twitter}></Link> */}

							<Link to="https://www.linkedin.com/company/eva-movil/" target='_blank' className={styles.linkedin}></Link>
							<Link to="https://youtu.be/-jpzbSaTKDs" target='_blank' className={styles.youtube}></Link>
						</div>
					</div>

				</div>

				<Card title={content.section1.title}>

					{
						content.section1.options.map((elem, index) => {
							return (
								<Link
									key={index}
									to={elem.href}
									className={styles.footer_link}
								>
									{elem.title}
								</Link>
							)
						})
					}

				</Card>

				<Card title={content.section2.title}>

					{
						content.section2.options.map((elem, index) => {
							return (
								<Link
									key={index}
									to={elem.href}
									className={styles.footer_link}
								>
									{elem.title}
								</Link>
							)
						})
					}

				</Card>

				<Card title={content.section3.title}>

					{
						content.section3.options.map((elem, index) => {
							return (
								<Link
									key={index}
									to={elem.href}
									className={styles.footer_link}
								>
									{elem.title}
								</Link>
							)
						})
					}

				</Card>

				<Card title={content.section4.title}>

					{
						content.section4.options.map((elem, index) => {
							return (
								<Link
									key={index}
									to={elem.href}
									className={styles.footer_link}
								>
									{elem.title}
								</Link>
							)
						})
					}

				</Card>

			</div>

			<div className={styles.footer_copyright}>
				<p>©{content.copyright} Ver. {getVersion()}</p>
			</div>

		</section>
	)
}

export default Footer;