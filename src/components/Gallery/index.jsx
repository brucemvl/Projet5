import { logements } from "../../datas/logements"
import Cartelogement from "./Cartelogement"
import "../../styles/Gallery.css"

function Gallery(){

return(

    <section className="listelogements">
        <ul className="listecartes">
            {logements.map(({id, cover, name})=>
            <div key={id}>
                <Cartelogement cover={cover} name={name} />

            </div>)}
        </ul>
        
    </section>
)

}

export default Gallery