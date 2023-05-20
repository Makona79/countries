
import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterByCode } from '../config';

type CurrenciesType = {
	code: string,
	name: string
}
type LanguagesType = {
	name: string
}
export type CountryType = {
	name: string,
	nativeName: string,
	flag: string,
	capital: string,
	population: number,
	region: string,
	subregion: string,
	topLevelDomain: string[],
	currencies: CurrenciesType[],
	languages: LanguagesType[],
	borders?: string[]
}
interface InfoPropsType extends CountryType {
	navigate: (name: string) => void
}
type BordersType = {
	name: string
}

const Info: React.FC<InfoPropsType> = (props) => {
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
		axios.get(filterByCode(borders)).then(({ data }) => setNeighbors(data.map((c: BordersType) => c.name)))
	}, [borders])

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
							<span className="info__item-title">Top Level Domain: </span>
							{topLevelDomain.map((d) => (<span key={d}> {d} </span>))}
						</li>
						<li className="info__item">
							<span className="info__item-title">Currency: </span>
							{currencies.map((c) => (<span key={c.code}> {c.name} </span>))}
						</li>
						<li className="info__item">
							<span className="info__item-title">Languages: </span>
							{languages.map((l) => (<span key={l.name}> {l.name} </span>))}
						</li>
					</ul>
				</div>
				<div className="info__meta">
					<span className='info__meta-title'>Border Countries</span>
					{!borders.length ? (
						<span>There is no border countries</span>
					) : (
						<div className="info__tag-group">
							{neighbors.map((b) => (
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