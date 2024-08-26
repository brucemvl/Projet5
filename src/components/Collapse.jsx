import "../styles/Collapse.scss"
import arrow from "../assets/Vector.png"
import React, { useState } from "react"


function Collapse({ titre, texte }) {
    const [isOpen, setisopen] = useState(false)

    const [rotate, setRotation] = useState(true)

    const openContent = () => {
        setisopen(!isOpen)
        setRotation(!rotate)
    }

    return (

        <div className="collapse" onClick={openContent}>
            <div className="collapse__bar">
                <p className="collapse__titre">{titre}</p>
                {rotate ?
                    <img src={arrow} alt="icone" id="icone" /> :
                    <img src={arrow} alt="icone" id="icone" className="active" />}
            </div>
            {isOpen &&
                <div className="collapse__dropdown">
                    <p className="collapse_dropdowntexte">{texte}</p>
                </div>}
        </div>

    )

}
export default Collapse
