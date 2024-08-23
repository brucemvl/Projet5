import "../../styles/Fiche.scss"
import Carrousel from "../Carrousel"


function Fiche({ cover, title, location, host, hostpicture, tags, rating, pictures }) {
    const motscles = tags.map((tag) =>
        <div className="tag" key={title + tag}>{tag}</div>)

    const range = [1, 2, 3, 4, 5]
    const note = range.map((num) => (
        <span key={num + "key"} className={rating > num ? "on" : ""}>★</span>
    ))

    return (
        <section className="fiche">
            <Carrousel pictures={pictures} />
            <div className="infos">
                <div className="titre">
                    <h1 className="name">{title}</h1>
                    <p className="localisation">{location}</p>
                    <div className="tags">{motscles}</div>
                </div>

                <div className="hoteandrating">
                    <div className="hote">
                        <p className="hote__name">{host}</p>
                        <img className="hote__img" alt="hote" src={hostpicture} />
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