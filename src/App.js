import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./pages/About";
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Service from './pages/Service';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact  index element={<Home />} />
          <Route exact path="/about" element={<About />} />
         <Route exact path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
