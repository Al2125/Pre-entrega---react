import ListaProductos from "./listaProductos";
import { useState , useEffect} from 'react'
import Carrito from "./Carrito";

const Inicio = () => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    return (
        <>
        <ListaProductos agregarCarrito={agregarCarrito} />
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
        </>
    )
}
export default Inicio