import React from 'react'

export interface PropsChildren {
	children: JSX.Element[] | JSX.Element
}
const Main = ({ children }: PropsChildren) => {
	return (
		<div className='wrapper'>
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default Main