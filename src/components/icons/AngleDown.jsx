import React from 'react'

const AngleDown = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={10}
			height={6}
			viewBox='0 0 10 6'
			fill="none"
			stroke="#4F5E64"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m1 1 3.5 4 4-4"
			/>
		</svg>
	)
}

export default AngleDown;