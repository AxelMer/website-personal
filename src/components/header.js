import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../mystyle.scss"

const Header = ({ siteTitle }) => (
  <header className="header"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/page-2"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          Login
        </Link>
        <Link to="/">Projectos</Link>
      </h1>
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
