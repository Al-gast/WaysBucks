import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/styles.css'
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Transaction from "./pages/Transaction";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import AddToping from './pages/AddToping'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/detail-product/:id" element={ <DetailProduct /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/transaction" element={ <Transaction /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
        <Route path="/add-toping" element={ <AddToping /> } />
      </Routes>
    </Router>
  );
}

export default App;
