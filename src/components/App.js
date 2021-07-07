/* Importar las librerías y los componentes necesarios */
import {DrizzleContext} from "@drizzle/react-plugin";
import React from 'react';
import '../css/App.css';
import AppVisual from "./AppVisual";
import Header from './Header';

/* Importar todo lo necesario para implementar la navegacion */
import {
 BrowserRouter as Router,
 Route,
 Link
} from "react-router-dom";

/* Creacion de los link que componen la diferentes partes de la barra de navegacion */
const Navegacion = () => (
 <nav>
	<ul>
		<li><Link to="/"><img className="Home" src="/home.png"/></Link></li> 
		<li><Link to="/Panel de Control/"><img className="Control" src="/panel_control.png"/></Link></li>
	</ul>
 </nav>
);

function App() {
    return (
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;
				
				/* Comprobar si drizzle se ha inicializado correctamente*/
                if (!initialized) {return (<main><h1>⚙️ Cargando dapp...</h1></main>);}
                return (<div className="AppPrincipal">
							<Router>
								<Navegacion/>
								{/*Ruta a la pantalla de inicio*/}
								<Route path="/" exact>
								    <Header drizzle={drizzle} drizzleState={drizzleState}/>
									<div className="Presentacion"><p className="texto">¡Bienvenid@ a Aulas Covid!.</p></div>
									<div className="Intro"><p>Pulse el botón <img className="ControlDos" src="/panel_control.png"/> para administrar los diferentes espacios de la escuela, o para 
									ver los avisos existentes actualmente.</p></div>
									<img className="Adicional" src="/fondoApWeb.jpg"/>
								</Route>
								{/*Ruta a la pantalla del panel de control*/}
								<Route path="/Panel de Control/">
									<AppVisual drizzle={drizzle} drizzleState={drizzleState}/>
								</Route>
							</Router>	
						</div> 
				);
             }}
        </DrizzleContext.Consumer>
    );
}

export default App;
