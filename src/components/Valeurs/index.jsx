import "../../styles/Valeurs.css"
import arrow from "../../assets/Vector.png"
import { useState } from "react"
import { Listvaleurs } from "../../datas/ListValeurs"


function Valeurs(){

        const [isOpen, setIsOpen] = useState(false)

        return ( isOpen ? (
            Listvaleurs.map(({titre, texte})=>
            <div className="drop">
            <div className="bar">
                <p className="bar__titre">{titre}</p>
        <img src={arrow} alt="icone" className="bar__icon" onClick={() => setIsOpen(false)}/>
        </div>
    
        <div className="dropdown">
            <p>{texte}</p>
        </div>
        </div>
            
) 
        ) : 
            Listvaleurs.map(({titre})=>
            <div className="drop">
                <div className="bar">
                    <p className="bar__titre">{titre}</p>
            <img src={arrow} alt="icone" className="bar__icon" onClick={() => setIsOpen(true)}/>
            </div>
            </div>
            )
        )

    
}

export default Valeurs

