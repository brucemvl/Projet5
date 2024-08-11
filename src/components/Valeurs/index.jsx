import "../../styles/Valeurs.css"
import arrow from "../../assets/Vector.png"


function genererDropdown(){
    const icons = document.querySelectorAll(".bar__icon")
    const barre = document.querySelectorAll(".drop")
    const def = document.querySelectorAll(".bar__text")
    
    
    for(let i=0; i< icons.length; i++){
       const dropdown = document.createElement("div")
       dropdown.classList.add("dropdown")
       const text = document.createElement("p")

barre[i].appendChild(dropdown)
dropdown.appendChild(text)
dropdown.style.display = "none"

if(def[i].textContent === "Fiabilité"){
    text.innerText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
}
else if(def[i].textContent === "Respect"){
    text.innerText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
}
else if(def[i].textContent === "Service"){
    text.innerText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
}
else if(def[i].textContent === "Sécurité"){
    text.innerText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}


icons[i].addEventListener("click", ()=>{
    

   if(dropdown.style.display === "none"){
    dropdown.style.display = "flex"
   }
   else {

    dropdown.style.display = "none"
   }
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