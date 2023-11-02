import "./SearchResultsList.css";

function SearchResultList({ cardSearchResults }){
    return(
        <div className="SearchResultList">
            {cardSearchResults.map((result, id) => {
                return <div key={id} ><a href={`/LorcanaApp/Card/${result}`}>{result}</a></div>
            })}
        </div>
    )
}

export default SearchResultList