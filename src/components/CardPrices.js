import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function CardPrices(){
    const { cardName } = useParams();

    useEffect(() => {
        axios.get(`https://api.lorcana-api.com/fuzzy/${cardName}`)
        .then((res)=>{
            console.log(`${cardName} searched`)
            console.log(res)
        })
    },[cardName])

    

    return (
        <div className="CardInfoDisplay">
            <p>{cardName}</p>
        </div>
    )
}

export default CardPrices