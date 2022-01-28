import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';

const App = () => {

	const [estadoModal1, setEstadoModal1] = useState(false);
	const [estadoModal2, setEstadoModal2] = useState(false);
	const [estadoModal3, setEstadoModal3] = useState(false);
	const [estadoModal4, setEstadoModal4] = useState(false);

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => setEstadoModal1( !estadoModal1 ) }>
					Modal 1
				</Boton>
				<Boton onClick={() => setEstadoModal2( !estadoModal2 ) }>
					Modal 2
				</Boton>
				<Boton onClick={() => setEstadoModal3( !estadoModal3 ) }>
					Modal 3
				</Boton>
				<Boton onClick={() => setEstadoModal4( !estadoModal4 ) }>
					Modal 4
				</Boton>
			</ContenedorBotones>

		{/* Modal n°1 */}
		<Modal
			estado = {estadoModal1}
			setEstado = {setEstadoModal1}
			titulo="Hola!"
			mostrarHeader={true}
			mostrarOverlay={true}
			posicionModal={'center'}
			padding={'20px'}
		>
			<Contenido>
			<h1>Ventana modal</h1>
			<p> Reutilizable y con opciones de personalización</p>
			<Boton
				onClick={() => setEstadoModal1(!estadoModal1)}
				> Aceptar 
			</Boton>
			</Contenido>
		</Modal>

		{/* Modal n°2 */}
		<Modal
			estado = {estadoModal2}
			setEstado = {setEstadoModal2}
			titulo="Ventana 2"
			mostrarHeader={false}
			mostrarOverlay={false}
			posicionModal={'end'}
			padding={'20px'}
		>
			<Contenido>
			<h1>Ventana modal 2</h1>
			<p> Reutilizable y con opciones de personalización</p>
			<Boton
				onClick={() => setEstadoModal2(!estadoModal2)}
				> Aceptar 
			</Boton>
			</Contenido>
		</Modal>	

		{/* Modal 3 */}
		<Modal
			estado = {estadoModal3}
			setEstado = {setEstadoModal3}
			titulo="Hello Lego-Bat"
			mostrarHeader={true}
			mostrarOverlay={false}
			posicionModal={'start'}
			padding={'20px'}
		>
			<Contenido>
				<img src='https://www.lego.com/cdn/cs/set/assets/bltcd635a3454dc7194/DC_-_Character_Detail_-_Gallery-Tall-Large_-_Batman.jpg?fit=crop&format=webply&quality=80&width=1600&height=700&dpr=1' alt='batman' />
			</Contenido>
		</Modal>	

		{/* Modal 4 */}
		<Modal
			estado = {estadoModal4}
			setEstado = {setEstadoModal4}
			titulo="Ventana 4"
			mostrarHeader={false}
			mostrarOverlay={true}
			posicionModal={'center'}
			padding={'5px'}
		>
			<Contenido>
			<img src='https://www.lego.com/cdn/cs/set/assets/bltcd635a3454dc7194/DC_-_Character_Detail_-_Gallery-Tall-Large_-_Batman.jpg?fit=crop&format=webply&quality=80&width=1600&height=700&dpr=1' alt='batman' />
			</Contenido>
		</Modal>	
		</div>

		
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;