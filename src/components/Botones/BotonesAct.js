/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import React from 'react';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

export default class BotonesAct extends React.Component {

  render(){
	return ( 
		<div >	
			<div id="BotonesPrincipales" className="flex-botones-admin">
				<div className="CrearAdmin"  style={{ display: (this.props.elementos[0] == true ? 'block' : 'none') }}>
				<ContractForm 
						drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
						contract="Escuela" method="crearAula"
						render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
					
							return <form display="block" onSubmit={handleSubmit}>
							<header>
								<header className="TextoCrear"><b>Introducir nombre:</b></header>
								{inputs.map((input, index) => (
										<input className="InputCrear" key={input.name} type="text" name={input.name} 
											placeholder="Nombre del Aula" onChange={handleInputChange}/>
															   ))}
							</header>	
										{/*Boton de crear aula*/}
										<button id="CrearAula" className="BCrear" type="button" onClick={handleSubmit}> 						  
											<b>Crear Aula</b>
										</button>
									</form>
						}}
				/>
				</div>
			</div>
							{/*Boton de ver alertas*/}
							<button className="BAlertas" onClick={() => this.props.visualizacion(0,0,1,0,0,0,0,0,1,0,0)} style={{ display: (this.props.elementos[7] == true ? 'block' : 'none') }}>
								<b>Ver Alertas</b>
							</button>
		</div>
			);
		}

}


