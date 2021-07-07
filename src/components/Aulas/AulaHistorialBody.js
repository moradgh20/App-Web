/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import AulaRow from "./AulaRow";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const AulaHistorialBody = (props) => {

let rows = [];
	for (let i = 0; i < props.entradasLongitud ; i++) {
		rows.push(
			 	<ContractData 
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"Escuela"}
				method={"dirPersonas"}
				methodArgs={[props.nombreAula, props.fecha, i]}
				render={dir => <ContractData 
							   drizzle={props.drizzle}
						       drizzleState={props.drizzleState}
						       contract={"Datos"}
						       method={"obtenerDatosPersona"}
						       methodArgs={[dir]}
						       render={datosPersona => 
								  <AulaRow drizzle={props.drizzle}
								  drizzleState={props.drizzleState} 
								  entrada={props.entradas[i]} i={i} 
								  datosPersona={datosPersona}/>	
						}/>	
				}/>
	);}
  return (rows);
}

export default AulaHistorialBody;
