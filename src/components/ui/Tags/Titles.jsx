import styles from './Titles.module.css'

export const Title55 = ({children}) => {
  return (
	<h1 data-aos='fade-left' className={styles.title55}>
		{children}
	</h1>
  )
}

export const Title45 = ({children, style}) => {
	return (
		<h2 data-aos='fade-left' className={styles.title45} style={style}>
			{children}
		</h2>
	)
}

export const Title30 = ({children}) => {
	return (
		<h3 data-aos='fade-left' className={styles.title30}>
			{children}
		</h3>
	)
}

export const Title25 = ({children, style}) => {
	return (
		<h3 data-aos='fade-left' className={styles.title25} style={style}>
			{children}
		</h3>
	)
}

export const Title24 = ({children}) => {
	return (
		<h3 data-aos='fade-left' className={styles.title24}>
			{children}
		</h3>
	)
}

export const Title20 = ({children}) => {
	return (
		<h3 className={styles.title20}>
			{children}
		</h3>
	)
}

export const Title18 = ({children, style}) => {
	return (
		<h5 className={styles.title18} style={style}>
			{children}
		</h5>
	)
}

export const Title16 = ({children}) => {
	return (
		<h5 className={styles.title16}>
			{children}
		</h5>
	)
}

export const Title14 = ({children}) => {
	return (
		<h5 className={styles.title14}>
			{children}
		</h5>
	)
}

export const Title12 = ({children}) => {
	return (
		<h5 className={styles.title12}>
			{children}
		</h5>
	)
}