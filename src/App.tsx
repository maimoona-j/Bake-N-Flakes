 
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// pages
import Blog from "./pages/Blog";
import Cakes from "./pages/Cakes";
import Cookies from "./pages/Cookies";
import Home from "./pages/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
     <Footer/>
      </div>
    </Router>
  );
}

export default App;
