import styles from './form.styles.css'

function Form(){
	return (
		<section name="form" id="form">
			<div className="container reveal-bottom">
				<div className="form-divisor">
					<div className="column">
						<h1 className="form-title">Faça sua encomenda aqui</h1>
						<img src="./src/assets/img/fundo-1.jpg" alt="" />
					</div>
					<div className="column">
						<form action="#" method="POST">
							<div className="form-row">
								<label className="form-label">
									<p>Nome completo</p>
									<input type="text" name="nome" id="nome" className="form-input" placeholder="Digite seu nome completo" />
								</label>
								<label className="form-label">
									<p>E-mail</p>
									<input type="email" name="email" id="email" className="form-input" placeholder="Digite seu e-mail" />
								</label>
							</div>
							<div className="form-row">
								<label className="form-label">
									<p>Produto</p>
									<select name="produto" id="produto" className="form-input">
										<option value="Selecione">Selecione</option>
										<option value="Brigadeiro Tradicional">Brigadeiro Tradicional</option>
										<option value="Brigadeiro Gourmet">Brigadeiro Gourmet</option>
										<option value="Brigadeiro Coco queimado">Brigadeiro Coco queimado</option>
										<option value="Beijinho">Beijinho</option>
										<option value="Surpresa de Uva">Surpresa de Uva</option>
									</select>
								</label>
								<label className="form-label">
									<p>Quantidade</p>
									<input type="number" name="quantidade" id="quantidade" value="1" className="form-input" />
								</label>
							</div>
							<div className="form-row">
								<label className="form-label">
									<p>Rua</p>
									<input name="logradouro" id="logradouro" className="form-input" placeholder="Insira o nome da rua" />
								</label>
							</div>
							<div className="form-row">
								<label className="form-label">
									<p>Número</p>
									<input name="numero" id="numero" placeholder="Insira o número" className="form-input" />
								</label>
								<label className="form-label">
									<p>CEP</p>
									<input name="cep" id="cep" placeholder="Insira o cep" className="form-input" />
								</label>
							</div>
							<div className="form-row">
								<label className="form-label">
									<p>Referência</p>
									<input name="referencia" id="referencia" className="form-input" placeholder="Insira uma referência" />
								</label>
							</div>
							<button type="button" className="form-button">
								<span>ENVIAR</span>
								<i className="fa fa-angle-right"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Form