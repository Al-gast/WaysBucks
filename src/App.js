import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css";
import DetailProduct from "./pages/detailProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail-product" element={ <DetailProduct /> } />
      </Routes>
    </Router>
  );
}

export default App;
