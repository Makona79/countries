import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import Info from '../components/info';

const Detailes = () => {
	const { name }: any = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState<any>(null);

	useEffect(() => {
		axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
	}, [name])


	return (
		<div>
			<button className='button' onClick={() => navigate(-1)}><IoArrowBack />Back</button>
			{/* {country && <Info navigate={navigate} {...country} />} */}
		</div>
	)
}

export default Detailes