import { useLocation } from "react-router-dom"
import Fiche from "../../components/Fiche"
import { logements } from "../../datas/logements"
import Collapse from "../../components/Collapse"

function FicheLogement(){
const location = useLocation()
console.log(location.state.id.id)

const logement = logements.find((logement)=> logement.id === location.state.id.id)

console.log(logement)


    return (
        <div className="blocpage__fiche">
        <Fiche cover={logement.cover} title={logement.title} location={logement.location} host={logement.host.name} hostpicture={logement.host.picture} tags={logement.tags} rating={logement.rating} />
        < div className="conteneur__collapse">
        <Collapse titre="Description" texte={logement.description}/>
        <Collapse titre="Equipement" texte={logement.equipments.map((equipement)=> <li>{equipement}</li>)}/>
        </div>
        </div>
    )
}

export default FicheLogement