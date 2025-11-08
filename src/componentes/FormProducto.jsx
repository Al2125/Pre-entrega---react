import { useState } from "react"
const FormProducto = () => {
    const [errores, setErrores] = useState({})
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        imagen: '',
        descripcion: ''
     })
     const manejarChange = (evento) => {
        const {name, value} = evento.target;
        setProducto({...producto, [name]: value})
     }
     const validarForm = () => {
        const nuevosErrores = {};

    if (!producto.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio";

    if (!producto.precio || producto.precio <= 0)
      nuevosErrores.precio = "El precio debe ser mayor a 0";

    if (!producto.imagen.trim() || producto.imagen.length < 6)
      nuevosErrores.imagen = "Debe subir una URL de imagen válida";

    if (!producto.descripcion.trim() || producto.descripcion.length < 10)
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 10 caracteres";
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
            }
        const manejarSubmit = async (evento) => {
            evento.preventDefault();
            if (validarForm()) {
                try{
                    const respuesta = await fetch("https://690f6e0e45e65ab24ac3cdab.mockapi.io/productos",
                        {method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(producto),
                        }
                    );
                    if (!respuesta.ok) {
                        throw new Error("Error al guardar el producto");
                    }
                    const productoCreado = await respuesta.json();
                    onAgregar(producto)
                    //Reseteamos formulario y errores
                    setProducto( {
                    nombre: '',
                    precio: '',
                    imagen: '',
                    descripcion: ''
                });
                setErrores({})
                }
                catch (error) {
                    console.error(error);
                    alert("Error al guardar el producto")
                }
                
                
                
            }

        };


    return(
        <form onSubmit={manejarSubmit}>
            <h2>Agregar producto</h2>

            <div>
                <label>Nombre:</label>
                <input
                type="text"
                name="nombre"
                value={producto.nombre}
                onChange={manejarChange}
                />
                {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
            </div>

            <div>
                <label>Precio:</label>
                <input
                type="number"
                name="precio"
                value={producto.precio}
                onChange={manejarChange}
                />
                {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
            </div>

            <div>
                <label>URL de imagen:</label>
                <input
                type="text"
                name="imagen"
                value={producto.imagen}
                onChange={manejarChange}
                />
                {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                name="descripcion"
                value={producto.descripcion}
                onChange={manejarChange}
                />
                {errores.descripcion && (
                <p style={{ color: "red" }}>{errores.descripcion}</p>
                )}
            </div>

            <button type="submit">Agregar</button>
            </form>
        );
    
}
export default FormProducto