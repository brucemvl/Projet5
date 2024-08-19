import { useState } from "react"
import Vectorleft from "../../assets/Vectorleft.png"
import Vectorright from "../../assets/Vectorright.png"

function Carrousel({pictures}){
console.log(pictures)

const [currentPicture, setCurrentPicture] = useState(0)

const activatePicture = (i) =>{
    if ( i === currentPicture) return "__active";
    return ""
}

const next = ()=>{
    setCurrentPicture((currentPicture + 1) % pictures.length)
}

const prev = ()=>{
    if(currentPicture < 0){
        setCurrentPicture(pictures.length -1)
    }
    setCurrentPicture((currentPicture - 1) )
}

return (
    <div className="fiche__carrousel">


{pictures.map((picture, i)=>(


    <img  key={picture} className={"fiche__carrousel__img"+ activatePicture(i)} src={picture} alt="carrousel"/>
    
))}
<div className="fiche__carrousel__buttons">
    <img  alt="arrowleft" onClick={prev} src={Vectorleft}/>
    <img  alt="arrowright" onClick={next} src={Vectorright}/>
    </div>
    </div>


)
}

export default Carrousel