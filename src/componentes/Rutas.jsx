import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from "./Inicio.jsx";
import Contacto from "./Contactos.jsx";
import DetalleProducto from "./DetalleProducto.jsx";
import Admin from "./Admin.jsx"
import Login from "./Login.jsx"
import RutaProtegida from './RutaProtegida.jsx';

function Rutas() {
  const [estaAutenticado, setEstaAutenticado] = useState(false)
  const iniciarSesion = () => setEstaAutenticado(true);
  const cerrarSesion = () => setEstaAutenticado(false);
    

  return (
    <>
    {
        estaAutenticado ? 
        <button onClick={cerrarSesion}>Cerrar Sesión</button> :
        <button onClick={iniciarSesion}>Iniciar Sesión</button>
      }
    <Routes>
      <Route path={'/'} element={<Inicio />} />
      <Route path={'/contacto'} element={<Contacto />} />
      <Route path={'/producto/:id'} element={<DetalleProducto />} />
      <Route path={'/admin'} element={
        <RutaProtegida estaAutenticado={estaAutenticado}>
          <Admin />
        </RutaProtegida>
        }
/>
      <Route path={'/login'} element={<Login />} />
    </Routes>
    </>
  );
}
export default Rutas


