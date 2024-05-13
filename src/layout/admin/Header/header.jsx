
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
        <div className="ust container   ">
            <div className="row">
            <div className="col-2   row">
                <Link>+12312-3-1209 </Link>
            </div>
            <div className="col-2">
            <Link>SUPPORT@COLORLIB.COM</Link>
            </div>
            <div className="col-7 "></div>
            <div className="col-1">
                <Link>Login</Link>
            </div>
            </div>
        </div>
        <div className="alt container">
            <Link to="/" >home</Link>
            <Link to="/admin"> add</Link>
        </div>
        </header>
    )
}

export default Header
                                