import styles from './Button.module.css'

const Button = ({ children, background = true, width, height, onClick, style, rounded = false, disabled = false }) => {

	console.log(disabled)

	const type = background ? styles.green_button : styles.white_button
	const newWidth = width ? `${width}px` : '100%'
	const newHeight = height ? `${height}px` : '100%'

	const size = width || height ? { width: newWidth, height: newHeight } : {}

	const newStyle = { ...size, ...style }

	const propsStyles = [{rounded, disabled}]

	// const classes = {
	// 	rounded: styles.rounded,
	// 	// disabled: styles.disabled,
	// };

	// let classNames = '';

	// Object.keys(classes).forEach(key => {

	// 	if (key) {
	// 		classNames += ` ${classes[key]}`;
	// 	}
	// });

	// console.log(classNames)

	return (
		<button
			onClick={disabled ? null : onClick}
			className={
				`${styles.container} ${type} 
				${rounded && styles.rounded}`

			}
			style={newStyle}
		>
			{children}
		</button>

	)
}

export default Button;