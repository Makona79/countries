import React from 'react'

interface Props {
	children: JSX.Element[] | JSX.Element
}
const Main = ({ children }: Props) => {
	return (
		<div className='wrapper'>
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default Main