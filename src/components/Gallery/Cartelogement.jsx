import "../../styles/Gallery.css"
import { Link } from "react-router-dom"


function Cartelogement({title, cover, id}){
        const state = {
                id: {id},
        }
    return(
    
        <Link to="/Fiche" state={state}><li key={id} className="carte" >
<img className="carte__img" src={cover} alt={title + "photo"} />
<p className="carte__txt">{title}</p>
        </li></Link>
)
    
}

export default Cartelogement