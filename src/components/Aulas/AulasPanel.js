/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

export default class AulasPanel extends React.Component {

constructor(props){
	super(props);
}

render(){

let rows = []	
	for (let i = 0; i < this.props.longitud ; i++) {
        rows.push(
 			<ContractData
 				drizzle={this.props.drizzle}
 				drizzleState={this.props.drizzleState}
 				contract={"Escuela"}
 				method={"aulas"}
				methodArgs={[i]}
 				render={data => 
					<div className="FilaPanelAulas"> 
							<Accordion allowZeroExpanded="true">
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
										<b>Aula {data == null ? "" : data.nombre}</b>  &nbsp; &nbsp;
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<button className="BPanel" type="button" onClick={() => this.props.visualizacion(0,0,1,0,0,1,i+1,0,0,0,0)}> 
											Ver historial
										</button>
									<ContractForm drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
									contract="Escuela" method="eliminarAula"
									render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
										{inputs.map((input, index) => (
										/*Línea necesaria para poder cambiar el valor del input automaticamente*/
											state[input.name] = i
										))}
										const labels = ["Indice del aula"];
										return <form onSubmit={handleSubmit} >
													<header>    
														{inputs.map((input, index) => (
																<input className="InputEliminar" key={input.name} type={inputTypes[index]} name={input.name}
																	value={i} onChange={handleInputChange} 
														/>))}
													</header>	
													<button className="BPanelDos" type="button" display="block" onClick={handleSubmit}>
														Eliminar
													</button>
											   </form>
									}}
									/>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
					</div> 			
 				}
			/>);
	}
      return (
			<div style={{ display: (this.props.elementos[4] ? 'block' : 'none') }}>
				<caption className="TituloPanel"><b>Listado de Aulas</b></caption>
				<table id="Tabla" className="TablaPanelAulas" >{rows}</table>
			</div>
	  );
}
}
