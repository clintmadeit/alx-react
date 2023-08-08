import logo from '../assets/logo.png';
import '..Header/Header.css';
import React from 'react';

function Header() {
    return (
        <div className="App-header">
            <img src={ logo } alt="Holberton Logo: Red Seahorse" />
            <h1>School dad</h1>
        </div>
    )
}

export default Header;