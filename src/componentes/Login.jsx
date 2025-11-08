import { useState } from "react"
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [usuario,setUsuario] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    const { login } = useAuthContext()
    const navigate = useNavigate()



const manejarSubmit = (evento) => {
    evento.preventDefault()
    if(usuario == 'admin' && contrasenia == '1234') {
        login(usuario);
        navigate('/admin');
    } else {
        alert('Usuario o contraseña inválido')
    }
}

    return(
        <>
    <h1>Login</h1>
    <form onSubmit={manejarSubmit}>
        <h3>Iniciar sesión</h3>
        <label htmlFor=''>Usuario</label>
        <input 
        type='text'
        value={usuario}
        onChange={(evento) => setUsuario(evento.target.value)}
        />
        <label htmlFor=''>Contraseña</label>
        <input 
        type='password'
        value={contrasenia}
        onChange={(evento) => setContrasenia(evento.target.value)}
        />
        <button type='submit'>Iniciar Sesión</button>
    </form>
    </>
    )
}
export default Login