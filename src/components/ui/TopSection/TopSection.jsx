
import { Title45 } from '@UI/Tags/Titles'
import styles from './TopSection.module.css'
import { Text20 } from '@UI/Tags/Texts'
import GreenTitleWithArrow from '@UI/GreenTitleWithArrow/GreenTitleWithArrow'
import { Fragment } from 'react'

const TopSection = ({ subtitle, description, button_text, button_onClick, button_href }) => {

	return (

		<div data-aos={'fade-left'} className={styles.top_section}>

			<div className={styles.subtitle_container}>

				{
					typeof subtitle === 'object' ? (

						subtitle.map((item, index) => {
							return (
								<Fragment key={index}>
									<Title45 style={{marginBottom: '0px'}}>{item}</Title45>
								</Fragment>

							)
						})
					) : (
						<Title45>{subtitle}</Title45>
					)

				}
			</div>

			<div className={styles.description_container}>
				<div className={styles.description_wrapper}>

					<Text20>{description}</Text20>

					<GreenTitleWithArrow onClick={button_onClick} href={button_href}>
						{button_text}
					</GreenTitleWithArrow>
				</div>
			</div>
		</div>
	)
}

export default TopSection