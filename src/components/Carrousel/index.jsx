import { useState } from "react"

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
    <button onClick={prev}>Prev</button>
    <button onClick={next}>Next</button>
    </div>
    </div>


)
}

export default Carrousel