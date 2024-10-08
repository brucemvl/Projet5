import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos/'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'
import Footer from './components/Footer'
import Header from './components/Header'
//import {logement} from "./pages/FicheLogement"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/*" element={<Error />} />
                <Route path="/Fiche/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)