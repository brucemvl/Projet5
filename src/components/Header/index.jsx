import { NavLink } from 'react-router-dom'
import logo from "../../assets/logoheader.png"
import "../../styles/Header.scss"
 
/*
const accueil = document.querySelector(".accueil")
const apropos = document.querySelector(".apropos")

function souligne(element){
        
    element.style.color = "yellow"
} */
 

function Header() {


    
    return (

        <header>
            <img src={logo} alt='logo' className='logo'/>
        <nav>
            <ul>
                <li className='accueil'><NavLink to="/">Accueil</NavLink></li>
                <li className='apropos' /*onClick={()=> souligne(apropos)}*/><NavLink to="/Apropos">A Propos</NavLink></li>
             </ul>
        </nav>
        </header>
    )
}

export default Header