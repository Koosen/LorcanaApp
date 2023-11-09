function cardMarketCardName(cardName){
    const v1Names = [
        'Elsa-Spirit-of-Winter',
        'Stitch-Carefree-Surfer',
        'Tinker-Bell-Giant-Fairy',
        'Mickey-Mouse-Wayward-Sorcerer',
        'Belle-Strange-but-Special',
        'Simba-Returned-King',
        'Aurora-Dreaming-Guardian',
        'Genie-On-the-Job',
        'Aladdin-Heroic-Outlaw',
        'Maui-Hero-to-All',
        'Mickey-Mouse-Artful-Rogue',
        'Hades-King-of-Olympus']

    let correctCardName = cardName.replace(" ","-")

    if (v1Names.includes(correctCardName)){
        correctCardName =+ "-V1"
    }

    return correctCardName
}

export default cardMarketCardName