//import { useEffect } from "react"
import "../../styles/Fiche.css"
//import Cartelogement from "../Gallery/Cartelogement"
//import { logements } from "../../datas/logements"

function Fiche({cover, title, location, host, hostpicture, tags, rating}){
    const motscles = tags.map((tag)=>
    <div className="tag">{tag}</div>)

    const range = [1, 2, 3, 4, 5]
    const note = range.map((num)=>(
        <span className={rating > num ? "on": ""}>★</span>
    ))

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
                    <div className="hote">
                    <p className="hote__name">{host}</p>
                    <img className="hote__img" alt="hote" src={hostpicture}/>
                    </div>
                    <div className="rating">
                        {note}
                        
                        </div>               
                </div>                    
            </div>       
        </section>
    )

}

export default Fiche