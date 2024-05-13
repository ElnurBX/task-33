
import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
const Header = () => {
return (

        <header className='siteHeader'>
            <div className="ust container   ">
                <div className="row">
                <div className="col-2 hoverlink   row">
                    <Link>+12312-3-1209 </Link>
                </div>
                <div className="col-3 hoverlink">
                <Link>SUPPORT@COLORLIB.COM</Link>
                </div>
                <div className="col-6 "></div>
                <div className="col-1 hoverlink">
                    <Link>Login</Link>
                </div>
                </div>
            </div>
            <div className="alt container">
              <div className="logo"><img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" /></div>
              <div className="navbar">
                <div className="col-1">  <Link to="/" >home</Link>
                 </div>
                <div className="col-1"><Link to="/admin"> add</Link></div>
                <div className="col-1"><Link to="/basket"> basket</Link></div>
              </div>
            </div>
        </header>


)
}

export default Header
                            