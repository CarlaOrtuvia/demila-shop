
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/Index';
import Navbar from './components/Navbar/Index';
import Banner from './components/Banner/Index';
import ItemListContainer from './components/ItemListContainer/Index';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
    <>
    <BrowserRouter>
      <Banner/>
      <CartProvider>
      <Navbar/> 
     
      <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/category/:categoriaId' element ={<ItemListContainer/>}/>
      <Route path='/cart' element ={ <Cart/>}/> 
      <Route path='/detail/:detalleId' element ={ <ItemDetailContainer/>}/>

      </Routes>

      </CartProvider>
      
     
   

    
    
    </BrowserRouter>
   
    
    </>
  
  );
}

export default App;


//  <ItemListContainer texto='Todos los Productos'/>   import ItemListContainer from './components/ItemListContainer/Index';