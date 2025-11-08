import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Nav  = () => {
    const {usuario} = useAuthContext();
    const esAdmin = usuario == 'admin'
    return (
        <nav>
            <ul>
                <li>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/contacto'}>Contacto</Link>
                {esAdmin &&
                <Link to={'admin'}>Admin</Link>}
                </li>
            </ul>
        </nav>
    )
}

export default Nav