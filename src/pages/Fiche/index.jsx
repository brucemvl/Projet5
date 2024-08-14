import "../../styles/Fiche.css"

function Fiche(){

    return (
        <section className="fiche">
            <img alt="logement" />
            <div className="infos">
                <div className="titre">
                    <p className="name"></p>
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