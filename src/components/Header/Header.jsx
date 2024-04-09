import React from 'react'
import './Header.css'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar">
                <li><NavLink to="/" className= {({isActive}) => `list-style ${isActive ? "nav-color" : "nav-default"}`}>Home</NavLink></li>
                <li><NavLink to="/projects" className= {({isActive}) => `list-style ${isActive ? "nav-color" : "nav-default"}`}>Projects</NavLink></li>
                <li><NavLink to="contact-us" className= {({isActive}) => `list-style ${isActive ? "nav-color" : "nav-default"}`}>Contact us</NavLink></li>
            </nav>

            
        </>
    )
}


