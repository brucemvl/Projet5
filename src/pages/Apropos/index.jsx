import "../../styles/Apropos.scss"
import Banner2 from "../../components/Banner2"
import Collapse from "../../components/Collapse"
import { Listvaleurs } from "../../datas/ListValeurs"

function Apropos() {

    return (
        <div className="blocpage__apropos">
            <Banner2 />
            <div className="conteneur__col">
                {Listvaleurs.map(({ titre, texte }) =>
                <Collapse titre={titre} texte={texte} key={titre + " collapse"} />
                )}
            </div>
        </div>
    )
}

export default Apropos