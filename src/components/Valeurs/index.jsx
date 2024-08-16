import "../../styles/Valeurs.css"
import arrow from "../../assets/Vector.png"
import { useState } from "react"
//import { Listvaleurs } from "../../datas/ListValeurs"


function Collapse({titre, texte}){

    const [isOpen, setisopen] = useState(false)

    const openContent = ()=> {
        setisopen (! isOpen)
    }


    return (
    
        <div className="drop">
        <div className="bar">
            <p className="bar__titre">{titre}</p>
    <img src={arrow} alt="icone" className="bar__icon" onClick={openContent} />
    </div>
{ isOpen &&
    <div className="dropdown">
       <p>{texte}</p>
    </div>}
    </div>
        
)


}

export default Collapse

