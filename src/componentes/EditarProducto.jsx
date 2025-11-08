import { useState, useEffect } from "react";

const EditarProducto = ({productoSeleccionado}) => {

    const [producto, setProducto] = useState(productoSeleccionado || {
        nombre: '',
        precio :'',
        imagen: '',
        descripcion:'' 
    })
    const API = "https://690f6e0e45e65ab24ac3cdab.mockapi.io/productos"

    useEffect (() => {
        if (productoSeleccionado)
            setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const manejarChange = (evento) => {
        const {name, value} = evento.target;
        setProducto({ ...producto, [name]: value})
    }
    const manejarSubmit = async (evento) => {
        evento.preventDefault();
        try {
            const respuesta = await fetch(`${API}/${producto.id}`, {
                method : "PUT",
                headers: { "Content-Type": "application/json",

                },
                body: JSON.stringify(producto),
            });
            if (!respuesta.ok && respuesta.status !== 200 && respuesta.status !== 201) 
                {throw new Error("Error al actualizar el producto");}

            const datosActualizados = await respuesta.json();

            //onActualizar(datosActualizados);
            alert("Productos actualizados con éxito");
        } catch(error) {
            console.error(error.message);
            alert("Error al actualizar el producto")
        }
    }

    return (
        <form onSubmit={manejarSubmit}>
      <h2>Editar producto</h2>

      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ""}
          onChange={manejarChange}
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio || ""}
          onChange={manejarChange}
        />
      </div>

      <div>
        <label>URL de imagen:</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen || ""}
          onChange={manejarChange}
        />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={producto.descripcion || ""}
          onChange={manejarChange}
        />
      </div>

      <button type="submit">Guardar cambios</button>
    </form>
    );

};

export default EditarProducto