import { useParams } from "react-router-dom";

function CardPrices(){
    const { cardName } = useParams();

    return (
        <div>
            <p> {cardName} </p>
        </div>
    )
}

export default CardPrices