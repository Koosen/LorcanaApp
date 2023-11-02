import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchResultList from './components/SearchResultsList';

function App() {
  const [cardSearchResults, setCardSearchResults] = useState([])

  return (
    <div className="App">
      <NavBar/>
      <SearchBar setCardSearchResults={setCardSearchResults}/>
      <SearchResultList/>
    </div>
  );
}

export default App;
