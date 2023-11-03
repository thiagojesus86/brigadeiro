import styles from './footer.styles.css'


function Footer(){

	return(
		<footer id="footer">
			<div className="container">
				<div className="footer-divisor">
					<a href="" className="footer-brand"><img src="./src/assets/img/logo-branco-sem-fundo.png" alt="" /></a>
					<ul className="footer-list">
						<li><a href="">Instagram</a></li>
						<li><a href="">Facebook</a></li>
						<li><a href="">Youtube</a></li>
						<li><a href="">Pinterest</a></li>
					</ul>
					<div className="footer-newsletter">
						<p>Receba nossa novidades</p>
						<form action="#" method="post">
							<label className="newsletter-label">
								<input type="email" name="newsletter" id="newsletter" placeholder="Receba nossas novidades" />
								<i className="fa fa-arrow-right"></i>
							</label>
						</form>
					</div>
              	</div>
              	<p className="footer-credits">&copy;Jenifer Brigadeiros - Todos os Direitos estão reservados</p>
          	</div>
      	</footer>
	)
}

export default Footer