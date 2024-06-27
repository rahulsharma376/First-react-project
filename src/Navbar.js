import React, { Children } from 'react';
import './styles.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/home" className="site-title">
                Porfolio
            </Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/Learning">My Learning</CustomLink>
                <CustomLink to="/Ongoing">Ongoing</CustomLink>
                <CustomLink to="/signin">Signup</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}