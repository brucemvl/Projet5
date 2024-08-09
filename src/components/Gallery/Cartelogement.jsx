import "../../styles/Gallery.css"

function Cartelogement({title, cover, id}){
    return(
    
        <li key={id} className="carte" >
<img className="carte__img" src={cover} alt={title + "photo"} />
<p className="carte__txt">{title}</p>
        </li>
)
    
}

export default Cartelogement