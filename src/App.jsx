import { useState } from 'react'
import './App.css'
import Header from './components/Header/Index'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route  path={"/"} element={<Home/>}/>
      <Route  path={"/productListing"} element={<ProductListing/>}/>
    </Routes>
    <Footer />
    
    </BrowserRouter>
    
     
    </>
  )
}

export default App
