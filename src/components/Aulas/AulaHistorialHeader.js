/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const AulaHistorialHeader = (props) => {

return(
		<thead>
			<tr>
				<th><b>Direccion</b></th>
				<th><b>Fecha</b></th>
				<th><b>Ent/Sal</b></th>
				<th><b>Puesto</b></th>
				<th><b>Estado</b></th>
				<th><b>Información</b></th>
			</tr>
 		</thead>
);
}

export default AulaHistorialHeader;
