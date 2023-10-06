import "@navikt/ds-css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from "./miragejs/server"
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./global-styles";


if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" })
}

const root = ReactDOM.createRoot(
    document.getElementById('fint-kontroll-app-admin-pod') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


export default App;