import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{padding: "12px 24px", background: "#1d3557", color: "white"}}>
        <Link to="/" style={{marginRight: "20px", color: "white", textDecoration: "none"}}>Stillwater
        </Link>
        <Link to="/about" style={{marginRight: "20px", color: "white", textDecoration: "none"}}>About</Link>
        <Link to="/contact" style={{marginRight: "20px", color: "white", textDecoration: "none"}}>Contact</Link>
        <Link to="/get-help" style={{color: "white", textDecoration: "none"}}>Get Help</Link>
        </nav>

    );
}

export default Navbar;