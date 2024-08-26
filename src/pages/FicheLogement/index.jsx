import { useParams } from "react-router-dom"
import Fiche from "../../components/Fiche.jsx"
import { logements } from "../../datas/logements"
import Collapse from "../../components/Collapse.jsx"
import Error from "../Error"

function FicheLogement() {

    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id)

if(!logement){
    return <Error />
}    
    

    return (
        <div className="blocpage__fiche">
            <Fiche cover={logement.cover} title={logement.title} location={logement.location} host={logement.host.name} hostpicture={logement.host.picture} tags={logement.tags} rating={logement.rating} pictures={logement.pictures} />
            < div className="conteneur__collapse">
                <Collapse titre="Description" texte={logement.description} />
                <Collapse titre="Equipement" texte={logement.equipments.map((equipement) => <li key={equipement + id}>{equipement}</li>)} />
            </div>
        </div>
    )
}

export default FicheLogement