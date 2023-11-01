import { useState, useCallback } from 'react';
import getCardPriceData from '../tools/getcardprice.js';

function SearchBar(){
    const [cardToSearch, setCardToSearch] = useState('')
    const [cardData, setCardData] = useState('')

    function handleCardToSeachChange(event){
        setCardToSearch(event.target.value)
    }

    

    const handleSubmit = useCallback((event)=>{
            event.preventDefault();
            getCardPriceData(cardToSearch,"The-First-Chapter","No").then((res)=>{
                setCardData(res)
            })
        }, [cardToSearch] ) 

    const CardDeets = () => {
            return cardData
        }
     
    return (
        <div className='SearchBar'>
            
            <form className='SearchForm' onSubmit={handleSubmit}>
                <div className='Search'>
                    <input type='text' 
                        className='searchInput'
                        name='search' 
                        placeholder='What card are you looking for?'
                        onChange={handleCardToSeachChange}/>
                    <input type='submit' value='S'/>
                </div>
            </form>



            <CardDeets/>
        </div>
    )
}

export default SearchBar