import React, { useState } from 'react'

import { Link } from 'react-scroll'

import styles from './header.styles.css?v1.0'

const list = [
	{
		name: "Home",
		route:"home"
	},
	{
		name: "Sobre nós",
		route:"about"
	},
	{
		name: "Produtos",
		route:"products"
	},
	{
		name: "Contato",
		route: "form"
	}
]

function Header(){

	const [fixed,setFixed] = useState("")

	window.addEventListener("scroll", () => {
		window.scrollY > 300 ? setFixed("fixed") : setFixed("")
	})
	
	const [menu,setMenu] = useState("")

	function toggleMenu(){
		menu == "" ? setMenu("active") : setMenu("")
	}

	return (
		<header id="header" className={fixed}>
			<div className="container">
				<nav className="header-nav">
					<a href="" className="header-brand">
						<img src="./src/assets/img/logo-branco-sem-fundo.png" alt="" />
					</a>
					<button className="toggle-menu" onClick={toggleMenu}>
						<i className="fa fa-bars"></i>
					</button>
					<ul className={`list-menu ${menu}`}>
						{
							list.map( (item) => (
								<li className="list-item" key={item.route}>
									<Link
										activeClass="active"
										to={item.route}
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										{item.name}
									</Link>
								</li>
							))
						}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header