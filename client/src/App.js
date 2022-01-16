import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Routine from './components/Routine';
import './styles/App.css';


function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/routine" element={<Routine />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
