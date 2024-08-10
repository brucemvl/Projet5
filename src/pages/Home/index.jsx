import Banner from "../../components/Banner/index.jsx"
import Gallery from "../../components/Gallery/index.jsx"
import Header from "../../components/Header/index.jsx"
import "../../styles/Home.css"

function Home() {
  return <div className="blocpage">
    <Header />
    <Banner />
    <Gallery />

  </div>

}

export default Home