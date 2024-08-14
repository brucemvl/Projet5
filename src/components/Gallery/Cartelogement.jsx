import "../../styles/Gallery.css"
import { Link } from "react-router-dom"


function Cartelogement({title, cover, id}){
    return(
    
        <Link to="/Fiche"><li key={id} className="carte" >
<img className="carte__img" src={cover} alt={title + "photo"} />
<p className="carte__txt">{title}</p>
        </li></Link>
)
    
}

export default Cartelogement