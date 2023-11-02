import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import { useState } from "react";
import axios from "axios";
import cleanCardName from "../tools/cleanCardName";

function SearchBar({setCardSearchResults}){

    const [searchInput, setSearchInput] = useState("");

    const fetchCardNames = (value) => {
        axios.get(`https://api.lorcana-api.com/lists/names`)
        .then((res) => {
            const cardList = res.data.map(cleanCardName)
            const filteredCardList = cardList.filter((cardName) => {
                return value && cardName && cardName.toLowerCase().includes(value)
            })
            setCardSearchResults(filteredCardList)
        })
    }

    const handleChange = (value) => {
        setSearchInput(value)
        fetchCardNames(value)
    }

    return (
        <div className='SearchInput'>
            <input placeholder='What card are you looking for?'
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}/>
            <FaSearch id="searchIcon"/>
        </div>
    )
}

export default SearchBar