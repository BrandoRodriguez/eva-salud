import React from 'react'

const AngleRight = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={8}
			height={15}
			viewBox='0 0 8 15'
			fill="none"
			{...props}
		>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M1.732 1.2a.954.954 0 1 0-1.35 1.35l5.052 5.052-5.052 5.052a.955.955 0 0 0 1.35 1.35l5.727-5.727a.955.955 0 0 0 0-1.35L1.732 1.2Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}

export default AngleRight