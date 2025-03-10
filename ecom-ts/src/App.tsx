
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Products from './Pages/Products'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails/>} />

        <Route path="/blogs" element={<Blog/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />

        
      </Routes>
      </BrowserRouter>
  )
}

export default App