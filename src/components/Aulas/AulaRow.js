/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const AulaRow = (props) => {
	
let rows = [];
	if(props.entrada.fecha == "NO"){
		rows.push( <tr key={"Persona-" + props.i}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
		);	
	}
	else{
		rows.push( <tr key={"Persona-" + props.i}>
					<td>{props.datosPersona}</td>
					<td>{props.entrada.fecha}</td>
					<td>{props.entrada.ent}-{props.entrada.sal}</td>
					<td>&emsp;{props.entrada.puesto}</td>
					<td>{props.entrada.estado}</td>
					<td>{props.entrada.info}</td>
				</tr>
		);
	}
	return (rows);
};

export default AulaRow;




		