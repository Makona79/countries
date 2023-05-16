import React from 'react'

const Card = ({ img, name, info = [], onClick }: any) => {

	return (

		<article className='article' onClick={onClick}>
			<div className="article__image">
				<img src={img} alt={name} />
			</div>
			<div className="article__body">
				<h3 className="article__title">{name}</h3>
				<ul className="article__list">
					{info.map((el: any) => (
						<li key={el.title} className="article__item">
							<span className="article__item-title">{el.title}: </span>
							<span> {el.description}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default Card