/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import AulaHistorial from "./AulaHistorial";
import AulaComponentes from "./AulaComponentes";
import AulasPanel from "./AulasPanel";
import AulaHistorialBody from "./AulaHistorialBody";
import Accordion from 'react-bootstrap/Accordion';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

const Aulas = (props) => {
	
  return(
	 <ContractData
 			drizzle={props.drizzle}
 			drizzleState={props.drizzleState}
 			contract={"Escuela"}
 			method={"alertasLength"}
			render={num =>  
				<div>
					<div className="TextoAppVisual" style={{ display: (props.elementos[10] ? 'block' : 'none') }}>
						<p><b>Has accedido al panel de control.</b></p>  
						<p>Aquí puedes gestionar las aulas de la escuela y ver las alertas actuales.</p> 
					</div>
		
					<div className="Alarma" style={{ display: (props.elementos[9] ? 'block' : 'none') }}>
						<input readOnly className="InputAlarma" type="text" value={num == 0 ? "No hay alertas": "Alertas detectadas" }>
						</input>
						<img className="SinAlertas" src="/sin_alertas.jpg" style={{ display: (num == 0 ? 'block' : 'none') }}/>
						<img className="ConAlertas" src="/alerta_covid.jpg" style={{ display: (num == 0 ? 'none' : 'block') }}/>
					</div>
			 
					<div id="FechaCon" className="FechaConsulta" style={{ display: (props.elementos[3] ? 'block' : 'none') }}>
						<header className="TituloFecha"><b>Introducir fecha de consulta:</b></header>
						<input id="Fecha" className="FechaConsultaBorde" type="text" 
						onChange={() => props.obtenerFecha(document.getElementById("Fecha").value)} 
						placeholder="Dia/Mes/Año">
						</input>
					</div>
			
					<div className="PanelHistorial">  
						<ContractData
							drizzle={props.drizzle}
							drizzleState={props.drizzleState}
							contract={"Escuela"}
							method={"aulasLength"}
							render={aulen =>  
									<div id="Panel" className="Historial">
											<AulasPanel drizzle={props.drizzle}
											drizzleState={props.drizzleState}
											longitud={aulen} elementos={props.elementos} 
											visualizacion={props.visualizacion}/>
									
											<AulaComponentes drizzle={props.drizzle}
											drizzleState={props.drizzleState} fechaConsulta={props.fecha} 
											elementos={props.elementos} visualizacion={props.visualizacion}/>
									</div> 		
									}
						/>
					</div>  
				</div>
			}/>
	);
};

export default Aulas;


