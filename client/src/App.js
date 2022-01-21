import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './routes/Browse';
import Home from './routes/Home';
import Journal from './routes/Journal';
import Landing from './routes/Landing';
import Register from './routes/Register';
import Routine from './routes/Routine';
import Sign from './routes/Sign';
import Training from './routes/Training';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/training" element={<Training />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
