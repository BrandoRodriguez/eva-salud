import React from 'react'

const Arrow_right = (props) => {
	return (
		<svg
			width={18}
			height={18}
			viewBox="0 0 18 18"
			fill="#00983A"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7.992 16.734a1.134 1.134 0 0 1-.315-.787c-.009-.319.087-.581.288-.788l5.364-5.512H1.095c-.31 0-.57-.108-.78-.324A1.103 1.103 0 0 1 0 8.522c0-.319.105-.586.314-.802.21-.215.47-.323.78-.323H13.33L7.965 1.884c-.201-.206-.297-.468-.288-.787.01-.319.114-.581.315-.788.2-.206.456-.309.766-.309s.566.103.767.31l7.225 7.424c.11.094.188.211.234.351.045.141.067.287.067.437 0 .15-.022.29-.067.422a.996.996 0 0 1-.234.365l-7.225 7.425c-.201.207-.456.31-.767.31-.31 0-.565-.103-.766-.31Z"
			/>
		</svg>
	)
}

export default Arrow_right