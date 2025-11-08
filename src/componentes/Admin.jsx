import FormProducto from "./FormProducto"
import EditarProducto from "./EditarProducto"
import { useState, useEffect } from "react";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    

  const cargarProductos = () => {
    fetch("https://690f6e0e45e65ab24ac3cdab.mockapi.io/productos")
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos));
  }
    useEffect(() =>{
        cargarProductos()
    }, []);

    const manejarEliminar = async (id) => {
        const confirmar = window.confirm("¿Esta seguro de que desea eliminar este producto?");
        if (!confirmar) return;

        try {
            const respuesta = await fetch(`https://690f6e0e45e65ab24ac3cdab.mockapi.io/productos/${id}`, {
                method: "DELETE",
            })
            if (!respuesta.ok) throw new Error("Error al eliminar el producto");
            alert("Producto eliminado con éxito");
            cargarProductos()
        }
        catch (error) {
        console.error(error.message);
        alert("Error al eliminar el producto");
        
        }
    }
    return (
    <>
         <FormProducto actualizarLista={cargarProductos}/>
         <EditarProducto productoSeleccionado={productoSeleccionado} actualizarLista={cargarProductos}/>

        <h3>Lista de productos</h3>
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    {producto.nombre} - {producto.precio} <button onClick={() => setProductoSeleccionado(producto)}>Seleccionar</button> <button onClick={() => manejarEliminar(producto.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    </>
    )
    
}
export default Admin