import "./SearchResultsList.css";

function SearchResultList({ cardSearchResults }){
    return(
        <div className="SearchResultList">
            {cardSearchResults.map((result, id) => {
                return <div key={id}>{result}</div>
            })}
        </div>
    )
}

export default SearchResultList