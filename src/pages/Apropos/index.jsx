import "../../styles/Apropos.scss"
import Banner2 from "../../components/Banner2"
import Collapse from "../../components/Collapse"
import { Listvaleurs } from "../../datas/ListValeurs"

function Apropos() {


const titre = Listvaleurs.map((title) =>
title.titre)

const texte = Listvaleurs.map((text)=>
text.texte)
console.log(titre)
console.log(texte)
//const titre = Listvaleurs.find((valeur)=> valeur.titre === location.titre)

    return (
        <div className="blocpage">
            <Banner2 />
            <div className="conteneur__col">
            <Collapse titre={titre[0]} texte={texte[0]} />
            <Collapse titre={titre[1]} texte={texte[1]} />            
            <Collapse titre={titre[2]} texte={texte[2]} />
            <Collapse titre={titre[3]} texte={texte[3]} />
            </div>
        </div>
    )
}

export default Apropos