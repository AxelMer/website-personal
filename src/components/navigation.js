import React from 'react'
import { Link } from 'gatsby'
import mySvg from '../img/method-draw-image.svg'
import '../css/global.scss'

export default () => (
<header className="header">
    <div>
      <nav className="navbar has-text-centered" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Inicio</Link>
          </div>
          <div className="navbar-brand">
             <img className="logo is-vcentered" src={mySvg} />
          </div>
          <div className="navbar-start">
            <Link to="/proyectos" className="navbar-item">Proyectos</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
)
