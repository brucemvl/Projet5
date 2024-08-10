import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey/'
import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Survey" element={<Survey />} />
            </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)