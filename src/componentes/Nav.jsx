import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Nav  = () => {
    const {usuario} = useAuthContext();
    const esAdmin = usuario == 'admin'
    return (
        <nav class="nav-bar">
            
                
                <Link to={'/'}>Inicio</Link>
                
                <Link to={'/contacto'}>Contacto</Link>
                
            
        </nav>
    )
}

export default Nav