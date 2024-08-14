import "../../styles/Fiche.css"
import Cartelogement from "../Gallery/Cartelogement"

function Fiche({title, cover}){

    return (
        <section className="fiche">
            <img alt="logement" src={cover} />
            <div className="infos">
                <div className="titre">
                    <p className="name">{title}</p>
                    <p className="localisation"></p>
                </div>
                <div className="hote">
                    <p className="hote__name"></p>
                    <img className="hote__img" alt="hote" />
                </div>
                <div className="tagsandrating">
                    <div className="tags"></div>
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