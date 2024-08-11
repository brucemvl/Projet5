import "../../styles/Valeurs.css"
import arrow from "../../assets/Vector.png"

function Valeurs(){
    return (
        <section className="valeurs">

            <div className="bar"><p className="bar__text">Fiabilité</p><img src={arrow} className="bar__icon" /></div>
            <div className="bar"><p className="bar__text">Respect</p><img src={arrow} className="bar__icon" /></div>
            <div className="bar"><p className="bar__text">Service</p><img src={arrow} className="bar__icon" /></div>
            <div className="bar"><p className="bar__text">Sécurité</p><img src={arrow} className="bar__icon" /> </div>

        </section>
    )
}

export default Valeurs