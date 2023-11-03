import { useState } from 'react'

import styles from './home.styles.css'

function Home(){

	const [ativo,setAtivo]=useState(0)

	const toggleAtivo=(ev)=>{
		ev.preventDefault()
		setAtivo(ev.target.dataset.bullet)
	}

	return (
		<section name="home" id="home">
			<div className="home-slide">
				<div className="slide-content">
					<div className={`item ${ativo==0?'visible':''}`}>
						<img src="./src/assets/img/slide/photo1.png" />
					</div>
					<div className={`item ${ativo==1?'visible':''}`}>
						<img src="./src/assets/img/slide/photo2.png" />
					</div>
					<div className={`item ${ativo==2?'visible':''}`}>
						<img src="./src/assets/img/slide/photo3.png" />
					</div>
				</div>
				<div className="slide-bullets">
					<a href="#" className={`bullet ${ativo==0?'active':''}`} data-bullet="0" onClick={toggleAtivo}></a>
					<a href="#" className={`bullet ${ativo==1?'active':''}`} data-bullet="1" onClick={toggleAtivo}></a>
					<a href="#" className={`bullet ${ativo==2?'active':''}`} data-bullet="2" onClick={toggleAtivo}></a>
				</div>
			</div>
			<div className="home-title">
				<h1 className="reveal-left">Compartilhando os momentos mais especiais com você.</h1>
				<a href="#">
					SAIBA MAIS 
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
		</section>
	)
}

export default Home