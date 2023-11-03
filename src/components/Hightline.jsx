import { Link } from 'react-scroll'

import styles from './Hightline.styles.css'

function Hightline(){
	
	return (
		<section id="hightline">
			<div className="container">
				<h2>Delicie-se com o irresistível sabor dos nossos brigadeiros e descubra o verdadeiro prazer em cada mordida.</h2>
				<br />
				<Link
					activeClass="active"
					to="products"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<i className="fa fa-angle-double-down"></i>
				</Link>
			</div>
		</section>
	)

}

export default Hightline