import React from 'react'
import { PropsChildren } from './Main'

const List = ({ children }: PropsChildren) => {
	return (
		<div className='list'>{children}</div>
	)
}

export default List