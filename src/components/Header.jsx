import { NavLink } from 'react-router-dom'
import logo from "../assets/logoheader.png"
import "../styles/Header.scss"
 
/*
const accueil = document.querySelector(".accueil")
const apropos = document.querySelector(".apropos")

function souligne(element){
        
    element.style.color = "yellow"
} */
 

function Header() {


    
    return (

        <header>
            <img src={logo} alt='logo' className='header__logo'/>
        <nav>
            <ul className='header__navbar'>
                <li className='header__navbar__li'><NavLink className="header__navbar__li__link" to="/">Accueil</NavLink></li>
                <li className='header__navbar__li' /*onClick={()=> souligne(apropos)}*/><NavLink className="header__navbar__li__link" to="/Apropos">A Propos</NavLink></li>
             </ul>
        </nav>
        </header>
    )
}

export default Header