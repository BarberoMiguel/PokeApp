import React from "react";
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <nav>
        <ul className="nav-bar">
            <li><Link className="link-sin-estilo" to='/search'>
                <img className="img1" src="https://cdn4.iconfinder.com/data/icons/pokemon-go-linear-black/2048/8346_-_Pokedex-512.png " alt="Pokedex" /> Pokédex
              </Link></li>
            <li><Link className="link-sin-estilo" to='/misbusquedas'>
                <img src="https://user-images.githubusercontent.com/9741252/81717987-83b84000-947b-11ea-9ac9-5ad1d59adf7a.png" alt="Busquedas" /> Mis Busquedas
              </Link></li>
        </ul >
    </nav >
  )
};

export default Header;
