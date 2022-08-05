import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/styles.css'
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/detail-product" element={ <DetailProduct /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </Router>
  );
}

export default App;
