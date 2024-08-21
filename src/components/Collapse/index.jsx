import "../../styles/Collapse.scss"
import arrow from "../../assets/Vector.png"
import React, { useState } from "react"


function Collapse({titre, texte}){
    const [isOpen, setisopen] = useState(false)

const [rotate, setRotation] = useState("active")


    

    
    

    const openContent =()=> {
        setisopen (! isOpen) 
        setRotation (! rotate)
        console.log(rotate)

        if(rotate === true){
console.log("okkk")        }

        }
        
    
       
    
    


    return (
    
        <div className="collapse">
        <div className="collapse__bar">
            <p className="collapse__titre">{titre}</p>
    <img src={arrow} alt="icone" className={rotate} onClick={openContent} />
    </div>
{ isOpen &&
    <div className="collapse__dropdown">
       <p className="collapse_dropdowntexte">{texte}</p>
    </div>}
    </div>
        
)

}
export default Collapse
