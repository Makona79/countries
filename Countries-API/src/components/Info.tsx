
import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterByCode } from '../config';

const Info = (props: any) => {
	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		region,
		subregion,
		topLevelDomain,
		currencies = [],
		languages = [],
		borders = [],
		navigate,
	} = props;

	const [neighbors, setNeighbors] = useState([]);

	useEffect(() => {
		axios.get(filterByCode(borders)).then(({ data }) => setNeighbors(data.map((c: any) => c.name)))
	}, [borders])
	console.log(topLevelDomain)
	return (

		<section className='info__wrapper'>
			<div className='info__image'><img src={flag} alt={name} /></div>
			<div className="info__body">
				<h2 className="info__title">{name}</h2>
				<div className="info__listgroup">
					<ul className="info__list">
						<li className="info__item">
							<span className="info__item-title">Native Name: </span>
							{nativeName}
						</li>
						<li className="info__item">
							<span className="info__item-title">Population: </span>
							{population}
						</li>
						<li className="info__item">
							<span className="info__item-title">Region: </span>
							{region}
						</li>
						<li className="info__item">
							<span className="info__item-title">Sub Region: </span>
							{subregion}
						</li>
						<li className="info__item">
							<span className="info__item-title">Capital: </span>
							{capital}
						</li>
					</ul>
					<ul className="info__list">
						<li className="info__item">
							<span className="info__item-title">Capital: </span>
							{topLevelDomain.map((d: any) => (<span key={d}> {d} </span>))}
						</li>
						<li className="info__item">
							<span className="info__item-title">Capital: </span>
							{currencies.map((c: any) => (<span key={c.code}> {c.name} </span>))}
						</li>
						<li className="info__item">
							<span className="info__item-title">Capital: </span>
							{languages.map((l: any) => (<span key={l.name}> {l.name} </span>))}
						</li>
					</ul>
				</div>
				<div className="info__meta">
					<span className='info__meta-title'>Border Countries</span>
					{!borders.length ? (
						<span>There is no border countries</span>
					) : (
						<div className="info__tag-group">
							{neighbors.map((b: any) => (
								<div className='info__tag' key={b} onClick={() => navigate(`/country/${b}`)}>
									{b}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Info