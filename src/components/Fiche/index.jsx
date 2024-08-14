//import { useEffect } from "react"
import "../../styles/Fiche.css"
//import Cartelogement from "../Gallery/Cartelogement"
//import { logements } from "../../datas/logements"

function Fiche({cover, title, location, host, hostpicture, tags}){

    
    return (
        <section className="fiche">
            <img className="fiche__img" alt="logement" src={cover} />
            <div className="infos">
                <div className="titre">
                    <p className="name">{title}</p>
                    <p className="localisation">{location}</p>
                    <div className="hashtags">
                    </div>
                </div>

                <div className="hoteandrating">
                    <p className="hote__name">{host}</p>
                    <img className="hote__img" alt="hote" src={hostpicture}/>
                    <div className="rating"></div>
                </div>                    
            </div>        
                <div className="collapse">
                    <div className="collapse__description"></div>
                    <div className="collapse__equipement"></div>
                </div>

            
        </section>
    )

}

export default Fiche