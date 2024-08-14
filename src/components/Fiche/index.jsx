//import { useEffect } from "react"
import "../../styles/Fiche.css"
//import Cartelogement from "../Gallery/Cartelogement"
//import { logements } from "../../datas/logements"

function Fiche({cover}){

    
    return (
        <section className="fiche">
            <img alt="logement" src={cover} />
            <div className="infos">
                <div className="titre">
                    <p className="name"></p>
                    <p className="localisation"></p>
                    <div className="tags"></div>
                </div>

                <div className="hoteandrating">
                    <p className="hote__name"></p>
                    <img className="hote__img" alt="hote" />
                    <div className="rating"></div>
                </div>                    
                    
                <div className="collapse">
                    <div className="collapse__description"></div>
                    <div className="collapse__equipement"></div>
                </div>

            </div>
        </section>
    )

}

export default Fiche