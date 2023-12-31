import { useLayoutEffect, useRef } from 'react';
import styles from './PrincipalLoader.module.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLanguage } from '@context/LanguageContext/useLanguage';
import { PrincipalLoaderText } from '@mocks/General';
import { getVersion } from '@utils/functions';
import { getLogo } from '@utils/getLogo';

const PrincipalLoader = () => {

	const { language, domain, company } = useLanguage()
	const content = PrincipalLoaderText[language]

	const LoaderRef = useRef(null)

	useLayoutEffect(() => {

		if (LoaderRef.current) {
			disableBodyScroll(LoaderRef.current);
		}

		return () => {
			enableBodyScroll(LoaderRef.current);
		}

	}, []);

	return (

		<div className={styles.container} ref={LoaderRef}>
			<div className={styles.circle}>
			</div>

			<div className={styles.content}>

				<div className={styles.logo_container}>
					{
						getLogo(language, 'color')
					}
				</div>

				<div className={styles.loading_input}>
					<div className={styles.loading_bar}></div>
				</div>

				<p className={styles.title}>
					{content.title.replace('{company}', company)}
				</p>

				<p className={styles.description}>
					{content.description.replace('{domain}', domain)}
					<br />
					{
						getVersion()
					}
				</p>

			</div>
		</div>
	);
};

export default PrincipalLoader;