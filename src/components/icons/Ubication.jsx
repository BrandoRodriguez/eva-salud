import React from 'react'

const Ubication = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={17}
			height={16}
			fill="none"
			{...props}
		>
			<g fill="#A0ABB8" clipPath="url(#a)">
				<path d="m8.5 16.005-.467-.4c-.643-.538-6.26-5.39-6.26-8.938a6.727 6.727 0 1 1 13.454 0c0 3.548-5.617 8.4-6.258 8.941l-.47.397Zm0-14.611a5.279 5.279 0 0 0-5.273 5.273c0 2.229 3.456 5.79 5.273 7.42 1.816-1.63 5.273-5.194 5.273-7.42A5.279 5.279 0 0 0 8.5 1.394Z" />
				<path d="M8.5 9.333A2.667 2.667 0 1 1 8.5 4a2.667 2.667 0 0 1 0 5.333Zm0-4A1.333 1.333 0 1 0 8.5 8a1.333 1.333 0 0 0 0-2.667Z" />
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M.5 0h16v16H.5z" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default Ubication;