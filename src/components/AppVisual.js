/* Importar las librerías y los componentes necesarios */
import React from 'react';
import Header from './Header';
import Aulas from "./Aulas/Aulas";
import BotonesAct from "./Botones/BotonesAct";
import AlertasContenido from "./Alertas/AlertasContenido";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {newContextComponents} from "@drizzle/react-components";

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

export default class AppVisual extends React.Component {

constructor(props){
	super(props);
	this.state = {
		/* La variable de estado "elementos" se utiliza para ver en todo momento que componentes de la app se deben visualizar. 
		Un componente a '1' se debe visualizar. A '0' debe ocultarse.
		La posiciones del array se corresponden con:
		[boton de crear aula, boton de eliminar aula, boton de volver, entrada para introducir fecha, panel de aulas,
		tabla de historial de registros de un aula, indice del aula pulsada, boton de ver alertas, tabla de alertas, aviso de alertas,
		texto del panel de control]*/
		elementos: [1,1,0,1,1,0,0,1,0,1,1], 
		/* La variable de estado "alarma" se utiliza para almacenar el estado de las alertas.*/
		alarma: "No hay alertas",
		/* La variable de estado "fecha" se utiliza para almacenar la fecha de consulta introducida en un aula.
		Inicialmente no hay ninguna fecha seleccionada.*/
		fecha: "ninguna"
	};

	this.visualizacion = this.visualizacion.bind(this);
	this.obtenerFecha = this.obtenerFecha.bind(this);
}

/*Funcion para cambiar la fecha de consulta seleccionada.
Es utilizada por componentes hijos a los que se pasa como propiedad*/
obtenerFecha(x){
 this.setState({fecha: x});
}

/*Funcion para cambiar la variable de estado "elementos".
Es utilizada por componentes hijos a los que se pasa como propiedad*/
visualizacion(a,b,c,d,e,f,g,h,k,l,m) {
  
let crear;
let eliminar;
let volver;
let fecha;
let panel;
let tabla;
let aulaPulsada;
let alertas;
let alertasTabla;
let alarma;
let texto;

aulaPulsada = g;

    if (a > 0) { 
	crear = true;
    } else {  
	crear = false;
    }
    
    if (b > 0) {    
	eliminar = true;
    } else { 
	eliminar = false;
    }
 
    if (c > 0) { 
	volver = true;
    } else {
	volver = false;
    }

    if (d > 0) { 
	fecha = true;
    } else {
	fecha = false;
    }

    if (e > 0) { 
	panel = true;
    } else {
	panel = false;
    }

    if (f > 0) {  
	tabla = true;
    } else { 
	tabla = false;
    }
	
	if (h > 0) {  
	alertas = true;
    } else { 
	alertas = false;
    }
	
	if (k > 0) {  
	alertasTabla = true;
    } else { 
	alertasTabla = false;
    }
	
	if (l > 0) {  
	alarma = true;
    } else { 
	alarma = false;
    }
	
	if (m > 0) {  
	texto = true;
    } else { 
	texto = false;
    }
	
let ver = [crear,eliminar,volver,fecha,panel,tabla,aulaPulsada,alertas,alertasTabla,alarma,texto];
this.setState({elementos: ver});

}

render(){
      return (
	  <ContractData
 				drizzle={this.props.drizzle}
 				drizzleState={this.props.drizzleState}
 				contract={"Escuela"}
 				method={"alertasLength"}
				render={num_alertas =>  
					<div className="App">		   
						<Header drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}/>
						<BotonesAct drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
						elementos={this.state.elementos} visualizacion={this.visualizacion}/>
						<Aulas drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
						elementos={this.state.elementos} visualizacion={this.visualizacion} 
						obtenerFecha={this.obtenerFecha} fecha={this.state.fecha} alarma={this.state.alarma} numAlertas={num_alertas}/> 
						<AlertasContenido drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} elementos={this.state.elementos} visualizacion={this.visualizacion}/> 
					</div> 
			  }/>
			 );
		}
}

