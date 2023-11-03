import styles from './about.styles.css'

function About(){
	return (
		<section name="about" id="about">
			<div className="container about-container reveal-bottom">
				<div className="about-column">
					<h2 className="about-title">Por que comprar nossos Brigadeiros?</h2>
					<p className="about-text">As publicações de notícias oferecem uma ótima maneira de informar os clientes sobre novos produtos e serviços, eventos, prêmios e muito mais. As publicações de notícias oferecem uma ótima maneira de informar os clientes sobre novos produtos e serviços, eventos, prêmios e muito mais.</p>
				</div>
				<div className="about-column">
					<figure className="about-figure">
						<img src="./src/assets/img/brigadeiros-1.jpg" alt="" className="about-img" />
					</figure>
				</div>
			</div>
		</section>
	)
}

export default About