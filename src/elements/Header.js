import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/kod.png'

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <p>
                    <img src={Logo} width="40" height="40" className="d-inline-block align-top mr-2" alt="Logo" />
                    Come to the Little KóviD.
                </p>
            </Link>
        </nav>
    )
}

export default Header

