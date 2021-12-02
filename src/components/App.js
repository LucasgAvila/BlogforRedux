import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Menu';
import Usuarios from './usuarios';

const Tareas = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margen'>
    <Routes>
    <Route exact path='/' element={ <Usuarios />} />
    <Route exact path='/tareas' element={ <Tareas /> } />
    </Routes>
    </div>
  </BrowserRouter>
);

export default App;
