// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Product } from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Product />
    </div>
  );
}

export default App;
