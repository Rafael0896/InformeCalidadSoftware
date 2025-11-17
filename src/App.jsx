import React from "react";

import Header from './components/Header.jsx';
import Introduction from "./components/Introduction";
import SoftwareDescription from "./components/SoftwareDescription";
import GoodPractices from "./components/GoodPractices";


// Componente principal de la aplicación
export default function App (){
    return(
        <div className="app">
            <Header/>
            <Introduction />
            <SoftwareDescription />
            <GoodPractices />
        </div>
    )
}