//import { useEffect } from "react"
import "../../styles/Fiche.css"
//import Cartelogement from "../Gallery/Cartelogement"
//import { logements } from "../../datas/logements"
import arrow from "../../assets/Vector.png"

function Fiche({cover, title, location, host, hostpicture, tags}){
    const motscles = tags.map((tag)=>
    <div className="tag">{tag}</div>)

    return (
        <section className="fiche">
            <img className="fiche__img" alt="logement" src={cover} />
            <div className="infos">
                <div className="titre">
                    <p className="name">{title}</p>
                    <p className="localisation">{location}</p>
                    <div className="tags">{motscles}</div>
                </div>

                <div className="hoteandrating">
                    <p className="hote__name">{host}</p>
                    <img className="hote__img" alt="hote" src={hostpicture}/>
                    <div className="rating"></div>
                </div>                    
            </div>        
                <div className="collapse">
                    <div className="collapse__description"><p>Description</p><img src={arrow} alt="icone" className="collapse__icon" /></div>
                    <div className="collapse__equipement"><p>Equipement</p><img src={arrow} alt="icone" className="collapse__icon" /></div>
                </div>

            
        </section>
    )

}

export default Fiche