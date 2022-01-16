import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Landing from './routes/Landing';
import Routine from './routes/Routine';
import './styles/App.css';


function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/landing" element={<Landing />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
