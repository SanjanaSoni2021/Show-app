
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navb from "./components/Navb";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./routes/Product";
import Contact from "./components/Contact";
import Kids from "./components/Kids";
import Male from "./components/Male";
import Female from "./components/Female";
import Like from "./components/Like";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Navb/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/pro" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/Male" element={<Male/>}/>
        <Route path="/Female" element={<Female/>}/>
        <Route path="/Like" element={<Like/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
