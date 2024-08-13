import { Link } from 'react-router-dom'
import logo from "../../assets/logoheader.png"
import "../../styles/Header.css"
 
/*
const accueil = document.querySelector(".accueil")
const apropos = document.querySelector(".apropos")

function souligne(element){
        
    element.style.color = "yellow"
} */
 

function Header() {

    
    return (

        <header>
            <img src={logo} alt='logo'/>
        <nav>
            <ul>
                <li className='accueil' /*onClick={()=> souligne(accueil)}*/><Link to="/">Accueil</Link></li>
                <li className='apropos' /*onClick={()=> souligne(apropos)}*/><Link to="/Survey">A Propos</Link></li>
             </ul>
        </nav>
        </header>
    )
}

export default Header