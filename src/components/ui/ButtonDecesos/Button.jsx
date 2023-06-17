import styles from './Button.module.css'

const Button = ({ children, background = true, width, height, onClick, style, rounded= false, disabled=false}) => {

	const type = background ? styles.green_button : styles.white_button
	const newWidth = width ? `${width}px` : '100%'
	const newHeight = height ? `${height}px` : '100%'

	const size = width || height ? {width: newWidth, height: newHeight} : {}

	const newStyle = {...size, ...style}

	return (
		<button
			onClick={disabled ? null  : onClick }
			className={`${styles.container} ${type} ${disabled ? styles.disabled : ''}`}
			style={newStyle}
		>
			{children}
		</button>

	)
}

export default Button;