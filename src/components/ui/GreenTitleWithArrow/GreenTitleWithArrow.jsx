
import { Link } from "react-router-dom";
import styles from './GreenTitleWithArrow.module.css'
import Arrow_right from '@components/icons/Arrow_right';


const GreenTitleWithArrow = ({ children, href, onClick }) => {

    return (

        href ? (
            <Link
                className={styles.white_button}
                to={href}
            >
                {children}
                <Arrow_right width={17} height={17} fill={'var(--green-primary'} />
            </Link>
        ) : (
            <button
                className={styles.white_button}
                onClick={onClick}
            >
                {children}
                <Arrow_right width={17} height={17} fill={'var(--green-primary'} />
            </button>
        )
    )
}

export default GreenTitleWithArrow;