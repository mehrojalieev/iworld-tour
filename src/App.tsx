import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './layout/navbar/Navbar'
import Home from './pages/home/Home'
import NavbarTop from './layout/navbar-top/NavbarTop'
import Footer from './layout/footer/Footer'

function App() {

  return (
    <>
      <div className="App">
        <NavbarTop/>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
