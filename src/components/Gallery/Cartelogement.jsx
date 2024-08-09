import "../../styles/Gallery.css"

function Cartelogement({name, cover, id}){
    return(
    <div>
        <li key={id} className="carte" >
<img className="carte__img" src={cover} alt={name + "photo"} />
{name}
        </li>
    </div>

)
    
}

export default Cartelogement