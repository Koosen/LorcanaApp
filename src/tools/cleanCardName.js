function cleanCardName(cardName){
    const cardNameWithWhiteSpace = cardName.replace(/-|_/g," ")
    return cardNameWithWhiteSpace.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())
}

export default cleanCardName