import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaProductos from "./componentes/listaProductos";
import Carrito from "./componentes/Carrito.jsx";
import Inicio from "./componentes/Inicio.jsx";
import Contacto from "./componentes/Contactos.jsx";
import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx"

import Rutas from "./componentes/Rutas.jsx"
import DetalleProducto from "./componentes/DetalleProducto.jsx"


function App() {
  return (
    <>
      <Header />
      <Rutas />
      <Footer/>
    </>
  )
}

export default App
