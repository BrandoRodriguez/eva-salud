import React from 'react'

const AngleLeft = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={8}
			height={14}
			viewBox='0 0 8 14'
			fill="none"
			{...props}
		>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M6.188 13.504a.955.955 0 0 0 1.35-1.35L2.486 7.102l5.052-5.053A.955.955 0 0 0 6.188.7L.461 6.428a.955.955 0 0 0 0 1.35l5.727 5.727Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}

export default AngleLeft