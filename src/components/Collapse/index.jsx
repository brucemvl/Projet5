import "../../styles/Collapse.scss"
import arrow from "../../assets/Vector.png"
import { useState } from "react"


function Collapse({titre, texte}){


    
    
    const [isOpen, setisopen] = useState(false)
  

    const openContent = ()=> {
        setisopen (! isOpen)    }


    return (
    
        <div className="collapse">
        <div className="collapse__bar">
            <p className="collapse__titre">{titre}</p>
    <img src={arrow} alt="icone" className="collapse__icon" onClick={openContent} />
    </div>
{ isOpen &&
    <div className="collapse__dropdown">
       <p className="collapse_dropdowntexte">{texte}</p>
    </div>}
    </div>
        
)


}

export default Collapse

