import { useLocation } from "react-router-dom"
import Fiche from "../../components/Fiche"
import { logements } from "../../datas/logements"

function FicheLogement({cover}){
const location = useLocation()
console.log(location.state.id.id)

const logement = logements.find((logement)=> logement.id === location.state.id.id)

console.log(logement)


    return (
        <Fiche cover={logement.cover}/>


        
    )
}

export default FicheLogement