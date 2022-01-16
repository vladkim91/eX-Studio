import Home from './components/Home';
import React, { useState } from 'react';
import './styles/App.css';
import Training from './components/Training';

function App() {
  const [toggle, setToggle] = useState(false);
  return <div className="App">{toggle ? <Home /> : <Training />}</div>;
}

export default App;
