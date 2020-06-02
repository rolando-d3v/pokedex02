import React from 'react'
import {Link} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark"  className="mb-4" >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/" className="nav-link" > Home </Link>
            <Link to="/listapokemon" className="nav-link" > Lista de Pokemons </Link>
            <Link to="/buscar" className="nav-link" > Buscar</Link>
        </Nav>
      </Navbar>
    )
}
