import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/global.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Inicio</Link>
            <Link to="/page-2" className="navbar-item">Proyectos</Link>
          </div>
          <div className="navbar-brand">
            <h1>
              <Link
              className="Logo"
                to="/"
              >
                {siteTitle}
              </Link>

            </h1>
          </div>
          <div class="navbar-start">
            <Link to="/page-2" className="navbar-item">Blog</Link>
            <Link to="/" className="navbar-item">Sobre Nosotros</Link>
          </div>
        </div>
      </nav>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
