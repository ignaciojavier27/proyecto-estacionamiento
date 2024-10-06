import { NavLink } from 'react-router-dom';
import '../../assets/styles/navbar.css';
const ClientNavbar = () => {
    return (
    <div className="container-fluid p-0 m-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
            <div className="container-fluid">
                <button
                data-mdb-collapse-init
                className="navbar-toggler"
                type="button"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/services' className="nav-link">Servicios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/owners' className="nav-link">Historial</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/logout' className="nav-link">Cerrar Sesión</NavLink>
                    </li>
                </ul>
                </div>

            </div>
        </nav>
    </div>
    );
};

export default ClientNavbar;
