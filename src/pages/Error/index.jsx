import "../../styles/Error.css"
import { Link } from 'react-router-dom'


function Error(){
    return (
        <div class="error">
            <p className="error__code">404</p>
            <p className="error__msg">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error__link"><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
    )

}

export default Error