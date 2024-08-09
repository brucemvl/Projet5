import { logements } from "../../datas/logements"
import Cartelogement from "./Cartelogement"
import "../../styles/Gallery.css"

function Gallery(){

return(

    <section className="listelogements">
        <ul className="listecartes">
            {logements.map(({id, cover, title})=>
            <div key={id} className="conteneur__carte">
                <Cartelogement cover={cover} title={title} />

            </div>)}
        </ul>
        
    </section>
)

}

export default Gallery