import { logements } from "../../datas/logements"

function Tags(){

    return (

        <ul className="tags">
            {logements.map((tag)=>
            <li>{tag}</li>)}

        </ul>
    )

}

export default Tags