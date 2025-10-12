import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import Carrito from './Carrito.jsx'
import Rutas from "./Rutas.jsx"

const ListaProductos = ({agregarCarrito}) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 5;

     useEffect( () => {
        fetch(`https://fakestoreapi.com/products`)
        .then((respuesta) => respuesta.json())
        .then((dato) => 
        {
            setProductos(dato);
            setCargando(false);
        })

        .catch((error) => {
            console.error("Error al cargar el producto: ", error);
            setCargando(false);
        });
    }, []);
    if (cargando) return (
        <p>Cargando productos...</p>
    );

    const ultimoProducto = paginaActual * productosPorPagina;
    const primerProducto = ultimoProducto - productosPorPagina;
    const productosActuales = productos.slice(primerProducto, ultimoProducto);
    const cantidadPaginas = Math.ceil(productos.length/productosPorPagina);

    const paginaAnterior = () => {
      if (paginaActual > 1) {
        setPaginaActual(paginaActual - 1)
      }
    }
    const paginaSiguiente = () => {
      if (paginaActual < cantidadPaginas) {
        setPaginaActual(paginaActual + 1)
      }
    }

    return (
        <div>
      <h2>Productos</h2>
      <div class="contenedor-productos">
        {productosActuales.map((producto) => (
          <div className="tarjeta-producto" key={producto.id}>
            <h3>{producto.title}</h3>
            <img
              src={producto.image}
              alt={producto.title}
              width={100}
              height={100}
            />
            <p>
              <strong>Precio:</strong> ${producto.price}
            </p>
            <button onClick={() => agregarCarrito(producto)}>Agregar</button>
            <Link to={`/producto/${producto.id}`}><button>Ver detalle</button></Link>
          </div>
        ))}
      </div>
      <div class="controles-paginas">
          <button onClick = {paginaAnterior}>Anterior</button>
          <p>Página {paginaActual} de {cantidadPaginas}</p>
          <button onClick = {paginaSiguiente}>Siguiente</button>
      </div>
    </div>
  );
};



export default ListaProductos

