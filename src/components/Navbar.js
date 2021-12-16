import React, { useContext } from 'react'
import userContext from '../contexts/UseContext';

const Navbar = () => {
    console.log('Navbar')
    const { user, login, logout } = useContext(userContext);

    return (
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">
            <h4> {user ? `Hola ${user.name}` : "Bienvenid@"}</h4>
          </span>
          {user ? (
            <button className="btn btn-primary btn-sm" onClick={logout}>Cerrar sessión</button>
          ) : (
            <button className="btn btn-success btn-sm" onClick={login}>
              Iniciar sessión
            </button>
          )}
        </div>
      </nav>
    );
}

export default Navbar
