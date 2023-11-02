import "./SearchResultsList.css";

function SearchResultList({ cardSearchResults }){
    return(
        <div className="SearchResultList">
            {cardSearchResults.map((result, id) => {
                return <div key={id} onClick={(e)=>alert(`you clicked ${result}`)}>{result}</div>
            })}
        </div>
    )
}

export default SearchResultList