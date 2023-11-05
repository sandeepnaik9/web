import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Pos from './components/pos';




function App() {
  const [flag,setFlag] = useState(0)
  

  return (
    <>
    <div className='d-flex h-100'>
        <NavBar />
        <Routes>
          <Route  path="/" element={<Pos />}/>
          
        </Routes>
    </div>
    </>
  );
}

export default App;
