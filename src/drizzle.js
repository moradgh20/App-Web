import { Drizzle } from '@drizzle/store';
import Datos from './Datos.json'
import Escuela from './Escuela.json'

// Opciones:
const options = {
    contracts: [ Datos, Escuela ],
    polls: {
        accounts: 3000,
    },
    web3: {
        fallback: {
            type: "ws",
            url: "ws://192.168.1.5:7545"
        }
    }
}

// Crear y exportar el objeto drizzle:
export default new Drizzle(options);


