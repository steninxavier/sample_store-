import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Electronicspage from "../Pages/Electronicspage";
import Home from "../Pages/Index";
import Product from "../Pages/Product";

const Index = () => {
  return (
   <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/products/electronics" element={<Electronicspage/>}/>
    </Routes>
</Router>
  )
}

export default Index


