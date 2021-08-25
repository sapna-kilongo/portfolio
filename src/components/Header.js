import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" href="#">EXTRATELECOM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" href="#">Home <span class="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#">Link</Link>
                </li>
            </ul>
            
        </div>
        </nav>
    )
}

export default Header
