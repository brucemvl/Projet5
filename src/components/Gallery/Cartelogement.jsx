import "../../styles/Gallery.scss"
import { Link } from "react-router-dom"


function Cartelogement({ title, cover, id }) {
 
  return (

    <Link className="lien" to={`/Fiche/${id}`} >
      <li  className="carte" >
        <img className="carte__img" src={cover} alt={title + "photo"} />
        <p className="carte__txt">{title}</p>
      </li>
    </Link>
  )

}

export default Cartelogement