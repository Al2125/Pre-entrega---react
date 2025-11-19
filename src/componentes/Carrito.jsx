import { useContext } from "react"
import {CarritoContext} from "../context/CarritoContext.jsx"


const Carrito = () => {
    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CarritoContext);
if (carrito.length == 0){
    return (
        <>
        <h2>Carrito</h2>
        <p>Acá vas a ver tus productos</p>
        </>
    )
}
return (
    <div>
        <h2>Carrito</h2>
        <div className="productos-carrito">
            <ul>
                {carrito.map(producto =>
                <li key={producto.id}> {producto.nombre} : {producto.precio}
                <button onClick={eliminarDelCarrito}>Eliminar</button>
                </li>
                
            )}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    </div>
)
}
export default Carrito