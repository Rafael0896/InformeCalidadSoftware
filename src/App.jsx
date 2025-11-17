import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Introduction from "./components/Introduction";


// Componente principal de la aplicación
export default function App (){
    return(
        <div className="app">
            <Header/>
            <Introduction />
        </div>
    )
}