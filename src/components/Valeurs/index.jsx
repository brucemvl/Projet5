import "../../styles/Valeurs.css"
import arrow from "../../assets/Vector.png"

function genererDropdown(){
    const icons = document.querySelectorAll(".bar__icon")
    const barre = document.querySelectorAll(".drop")
    for(let i=0; i< icons.length; i++){
       const dropdown = document.createElement("div")
       dropdown.classList.add("dropdown")
       const text = document.createElement("p")

barre[i].appendChild(dropdown)
dropdown.appendChild(text)
dropdown.style.display = "none"



icons[i].addEventListener("click", ()=>{
    dropdown.style.display = "flex"
})
    }

    
}
genererDropdown()


function Valeurs(){

    return (
        <section className="valeurs">

            <div className="drop"><div className="bar"><p className="bar__text">Fiabilité</p><img src={arrow} className="bar__icon" /></div></div>
            <div className="drop"> <div className="bar"><p className="bar__text">Respect</p><img src={arrow} className="bar__icon" /></div></div>
            <div className="drop"> <div className="bar"><p className="bar__text">Service</p><img src={arrow} className="bar__icon" /></div></div>
            <div className="drop"> <div className="bar"><p className="bar__text">Sécurité</p><img src={arrow} className="bar__icon" /> </div></div>

        </section>
    )
}

export default Valeurs