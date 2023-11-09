import axios from "axios";
import cardMarketCardName from "./cardMarketCardName"

 async function getCardPriceData(card){
    const cardName = cardMarketCardName(card)

    const cardMarketPage = 'https://corsproxy.io/?' + 
        encodeURIComponent(`https://www.cardmarket.com/en/Lorcana/Products/Singles/The-First-Chapter/${cardName}`);

    let cardMarketResponse = {}
    
    try {
        cardMarketResponse = await axios.get(cardMarketPage)
        const cardMarketHTML = cardMarketResponse.data
        const cardMarketList = cardMarketHTML.slice(cardMarketHTML.indexOf('<dl'), cardMarketHTML.indexOf('</dl>'))
        const cardMarketData = cardMarketList.split(">").map(element => element.slice(0, element.indexOf("<"))).filter(entry => /\S/.test(entry))
        const cardMarketResults =  {
            "Card Number" : cardMarketData[2],
            "Printed In" : cardMarketData[4],
            "Card Market - Cheapest" : cardMarketData[14],
            "Card Market - Price Trend" : cardMarketData[16],
            "Card Market - 1-day average price" : cardMarketData[22],
            "Card Market - 7-days average price" : cardMarketData[20],
            "Card Market - 30-days average price" : cardMarketData[18],
        }

        return (
            <div className="resultspage">
                <div className="cardImage">
                    <p>picture goes here</p>
                </div>
                <div>
                    <ul>
                    <li>Card Number: {cardMarketResults["Card Number"]}</li>
                    <li>Printed In: {cardMarketResults["Printed In"]}</li>
                    <li>Card Market - Cheapest: {cardMarketResults["Card Market - Cheapest"]}</li>
                    <li>Card Market - Price Trend: {cardMarketResults["Card Market - Price Trend"]}</li>
                    <li>Card Market - 1-day average price: {cardMarketResults["Card Market - 1-day average price"]}</li>
                    <li>Card Market - 7-days average price: {cardMarketResults["Card Market - 7-days average price"]}</li>
                    <li>Card Market - 30-days average price: {cardMarketResults["Card Market - 30-days average price"]}</li>
                    </ul>   
                </div>
            </div>
        )

    } catch(error){
       return (
        <div><p>Card Not Found, Please check your spelling</p></div>
       )
    }
}

export default getCardPriceData