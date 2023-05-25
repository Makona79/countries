import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div>
			<Link to="/" className='title-link'>
				<button className="btn">Нажми для запуска</button>
			</Link>
		</div>
	)
}

export default NotFound