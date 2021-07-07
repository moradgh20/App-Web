import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { DrizzleContext } from "@drizzle/react-plugin";

import drizzle from "./drizzle";

import './css/index.css';

import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <DrizzleContext.Provider drizzle={drizzle}>
            <App/>
        </DrizzleContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
