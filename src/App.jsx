import Navbar from './components/navbar/Navbar'
import Itemlistcontainer from './components/itemListContainer/Itemlistcontainer'
import ItemCount from './components/itemCount/ItemCount'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path='/' element= { <Itemlistcontainer greeting = "Este va a ser mi Ecommerce para portfolio" /> } />
        <Route path='/category/:idCategory' element={ <Itemlistcontainer greeting = "Este va a ser mi Ecommerce para portfolio" /> } />
        <Route path='/detail/:idProduct' element={ <ItemDetailContainer /> }/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
