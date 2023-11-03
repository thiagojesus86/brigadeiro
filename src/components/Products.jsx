import styles from './products.styles.css'

function Products(){

	return (
		<section name="products" id="products">
			<div className="container reveal-bottom">
				<h1 className="reveal-3">Conheça as delícias que produzimos</h1>
				<div className="products-gallery reveal-4">
					<div className="prod-item">
						<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-1.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Caixa combinada</h2>
							<p className="prod-text">Ideal para presentear aquela pessoa que você tanto ama.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
						</div>
							<div className="prod-item">
							<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-2.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Brigadeiro Tradicional</h2>
							<p className="prod-text">Típico doce brasileiro, é ideal para adoçar seu dia.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
					</div>
					<div className="prod-item">
						<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-3.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Brigadeiro Gourmet</h2>
							<p className="prod-text">Ideal para quem procura algo além do tradicional.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
					</div>
					<div className="prod-item">
						<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-1.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Caixa combinada</h2>
							<p className="prod-text">Ideal para presentear aquela pessoa que você tanto ama.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
					</div>
					<div className="prod-item">
						<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-2.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Brigadeiro Tradicional</h2>
							<p className="prod-text">Típico doce brasileiro, é ideal para adoçar seu dia.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
					</div>
					<div className="prod-item">
						<div className="prod-item-image">
							<img src="./src/assets/img/gallery-item-3.jpg" alt="" />
						</div>
						<div className="prod-desc">
							<h2 className="prod-title">Brigadeiro Gourmet</h2>
							<p className="prod-text">Ideal para quem procura algo além do tradicional.</p>
							<a href="" className="prod-link"><span>CONHEÇA</span> <i className="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}

export default Products