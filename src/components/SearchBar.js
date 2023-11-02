import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import { useState } from "react";

function SearchBar(){

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='SearchInput'>
            <input placeholder='What card are you looking for?'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}/>
            <FaSearch id="searchIcon"/>
        </div>
    )
}

export default SearchBar