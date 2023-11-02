import SearchBar from './SearchBar';
import SearchResultList from './SearchResultsList';
import { useState } from 'react';
import './Landing.css'

function Landing(){
    const [cardSearchResults, setCardSearchResults] = useState([])

    return (
        <div className='SearchApp'>
            <SearchBar setCardSearchResults={setCardSearchResults}/>
            <SearchResultList cardSearchResults={cardSearchResults}/>
        </div>
    )
}

export default Landing