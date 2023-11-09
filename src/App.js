import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import CardPrices from './components/CardPrices';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/LorcanaApp/Card/:cardName" element={<CardPrices/>}/>
          <Route path="/LorcanaApp/AboutMe" element={<AboutMe/>}/>
          <Route path="/LorcanaApp" element={<Landing/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
