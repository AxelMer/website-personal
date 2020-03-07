import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/global.scss"
import mySvg from "../images/method-draw-image.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <nav className="navbar has-text-centered" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Inicio</Link>
            <Link to="/page-2" className="navbar-item">Proyectos</Link>
          </div>
          <div className="navbar-brand">
             <img className="logo is-vcentered" src={mySvg} />
          </div>
          <div className="navbar-start">
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
