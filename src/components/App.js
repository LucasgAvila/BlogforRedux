import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Menu';
import Usuarios from './usuarios';
import Publicaciones from "./Publicaciones";

const Prueba = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margen'>
    
      <Route exact path='/' component={Usuarios} />
			<Route exact path='/tareas' component={Prueba} />
			<Route exact path='/publicaciones/:key' component={Publicaciones} />
    
    </div>
  </BrowserRouter>
);

export default App;
