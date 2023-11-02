import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/LorcanaApp" element={<Landing/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
