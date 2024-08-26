import logo from "../assets/logofooter.png"
import "../styles/footer.scss"
 
function Footer() {
    return (
        <footer className="footer">
            <div className="footerelements">
                <img src={logo} alt='logo' className="logofooter" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer