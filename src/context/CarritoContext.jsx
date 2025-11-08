import {createContext, useState} from 'react';

export const CarritoContext = createContext();
//recibir children como funcion, exportar el content y la funcion
export function CarritoProvider ({children})
{
    const [carrito, setCarrito] = useState([]);

    const eliminarDelCarrito = (indice) => {
        setCarrito(carrito.filter((__, i) => i !== indice));
    }
    const agregarCarrito = (producto) => {
            setCarrito([...carrito, producto])
        }
        const vaciarCarrito = () => {
            setCarrito([])
        }
    return  (
    //datos, funciones o métodos necesarios en value
    <CarritoContext.Provider value = {{carrito, setCarrito, eliminarDelCarrito, agregarCarrito, vaciarCarrito }}> 
        {children}
    </CarritoContext.Provider>

)
}
export default CarritoProvider