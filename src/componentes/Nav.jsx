import { Link } from 'react-router-dom'

const Nav  = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link to={'/'}>Inicio</Link>
                </li>
                <li>
                <Link to={'/contacto'}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav