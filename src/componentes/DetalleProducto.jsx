import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


const DetalleProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState(null)

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((respuesta) => respuesta.json())
        .then((dato) => setProducto(dato))
        .catch((error) => console.error("Error al cargar el producto: ", error));
    }, [id]);

    if (!producto){
        return <p>Cargando producto</p>
    }

    return (
        //<h2>Este es el producto N°: {id}</h2>
        <>
        <div class="detalleProducto">
            <h2>{producto.title}</h2>
            <img
                src={producto.image}
                alt={producto.title}
                width={150}
                height={150}
            />
            <p>{producto.description}</p>
            <p>
                <strong>Precio:</strong> ${producto.price}
            </p>
        </div>
        <Link to={`/`}><button>Volver</button></Link>
        </>
    );
}
export default DetalleProducto