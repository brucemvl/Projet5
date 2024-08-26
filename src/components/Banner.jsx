import image from "../assets/IMG.png"
import "../styles/Banner.scss"

function Banner() {

    return (
        <section className="banniere">
        <div className="banniere__titre">
            <p>Chez vous, partout et ailleurs</p>
        </div>
        <div className="banniere__background"><img className="banniere__img" src={image} alt="fond"/></div>
        </section>
    )
}

export default Banner