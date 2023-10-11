import  NavBar  from './components/NavBar';
import  ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
<>
 <BrowserRouter>
   <NavBar />
     <Routes>
       <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1>Proximamente</h1>}  />
    </Routes>
   </BrowserRouter>
    </>

  )
}


export default App