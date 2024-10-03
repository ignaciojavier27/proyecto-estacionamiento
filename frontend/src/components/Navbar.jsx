import '../assets/styles/navbar.css';
const Navbar = () => {
    return (
    <div className="container-md">
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
                <a className="navbar-brand mt-2 mt-lg-0">
                    <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                    />
                </a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link">
                        Servicios
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">
                        Propietarios
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">
                        Ingresa
                    </a>
                    </li>
                </ul>
                </div>

            </div>
        </nav>
    </div>
    );
};

export default Navbar;
