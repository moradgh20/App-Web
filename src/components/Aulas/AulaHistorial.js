/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import AulaHistorialHeader from "./AulaHistorialHeader";
import AulaHistorialBody from "./AulaHistorialBody";
import Table from 'react-bootstrap/Table';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

const AulaHistorial = (props) => {

let rows = [];
	return(
	<div style={{ display: (props.elementos[5] ? 'block' : 'none') }}>
		<div className="CabeceraAulas">  
				<div className="CabeceraAulasUno" >
					<p><b>Listado de entradas del aula {props.pulsada}</b></p>  
					<span className="CabeceraAulasDos">
						<p>En la siguiente tabla se muestra un listado con todas las entradas del aula {props.pulsada} en la fecha {props.fechaConsulta}</p>  
					</span>
				</div>
				
				<div>
					<p className="HistorialAula"><b>Entradas</b></p>  
				</div>
				
				<div className="CabeceraAulasCuatro">
					<span>
						<p>Para regresar al panel pulse volver.</p>  
						<button className="BVolver" style={{ display: (props.elementos[2] == true ? 'block' : 'none') }} onClick={() => props.visualizacion(1,1,0,1,1,0,0,1,0,1,1)} >
							<b>Volver</b>
						</button>
					</span>
				</div>
		</div>
		
		<Table className="TablaHistorial" striped bordered hover>
					<AulaHistorialHeader 
					drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>
					<tbody>		
						<ContractData
						drizzle={props.drizzle}
						drizzleState={props.drizzleState}
						contract={"Escuela"}
						method={"guardarEntradasAula"}
						methodArgs={[props.pulsada, props.fechaConsulta]}
						render={entradas =>
						  <AulaHistorialBody drizzle={props.drizzle}
						  drizzleState={props.drizzleState} entradasLongitud={props.longitud} 
						  fecha={props.fechaConsulta} nombreAula={props.pulsada} entradas={entradas}/>
						}/>
					</tbody>
		</Table>
	</div>		
	);	
}

export default AulaHistorial;




						

				
					
					
				