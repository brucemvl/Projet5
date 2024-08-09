import { Link } from 'react-router-dom'
import logo from "../../assets/logoheader.png"
import "../../styles/Header.css"
 

function Header() {

    return (
        <header>
            <img src={logo} alt='logo'/>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Survey">A Propos</Link></li>
             </ul>
        </nav>
        </header>
    )
}

export default Header