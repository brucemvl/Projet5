import { logements } from "../../datas/logements"
import Cartelogement from "./Cartelogement"
import "../../styles/Gallery.scss"

function Gallery(){

return(

    <section className="listelogements">
        <ul className="listecartes">
            {logements.map(({id, cover, title})=>
            <div key={id+"key"} className="conteneur__carte">
                <Cartelogement cover={cover} title={title} id={id}/>
             </div>)}
        </ul>
        
    </section>
)

}

export default Gallery