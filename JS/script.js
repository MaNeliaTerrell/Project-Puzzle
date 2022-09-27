
const hpImages = [
    {   image: "https://pm1.narvii.com/6040/39f9068baceac545d7e81da88745e69e118b7ece_hq.jpg" },
    {  image: "https://m.media-amazon.com/images/I/71diVvqlkSL._AC_SX385_.jpg" },
    {   image: "https://shop.universalorlando.com/merchimages/p-hufflepuff-cup-1297606.jpg" },
    {   image: "https://i.etsystatic.com/25263772/r/il/5c33cf/2544440414/il_570xN.2544440414_786k.jpg" },
    {   image: "https://cdna.artstation.com/p/assets/images/images/018/885/272/large/gale-evangelista-1.jpg?1561101812" },
    {   image: "https://the-wizards-shop.com/1834-thickbox_default/basilisk-tooth-and-tom-riddle-diary.jpg" },
    {   image: "https://www.thestoreofrequirement.com.au/assets/alt_1_thumb/1247.jpg?20200714030613" },
]
// console.log(hpImages[2].image);

let playerScoreBoard = document.getElementById("playerScoreBoard")
let computerScoreBoard = document.getElementById("computerScoreBoard")
// const scoreBoard = document.getElementsByClassName('scoreBoard')
let sevenHorx = document.querySelector('.sevenhorcruxes')
// console.log(hpImages);
// const body = document.getElementsByTagName("body")
// const buttons = document.querySelectorAll(".buttons")
const draw = document.querySelector("#draw")
const reset = document.querySelector("#reset")
let div = document.querySelector("#set-of-cards")
let computerScore = 0
let playerScore = 0
let winner = '';

const getTwoImages = () => {
    
    const arrayOne = []
    for (let i = 0; i < 2; i++) {
        let card = hpImages[(Math.floor(Math.random() * hpImages.length))]
        arrayOne.push(card)
        const img = document.createElement('img')
        img.src = card.image
        img.style.width = '100px'
        img.style.height = '150px'
        img.style.border = "solid"
        img.style.borderColor = "maroon"
        img.style.margin = "5px"
        div.appendChild(img)
    }
    return arrayOne

}
const playGame = () => {
    if(div.children){
        while (div.children.length > 0){
           div.children[0].remove()
    }
    }
    // Draw two cards for the player
    let playerCards = getTwoImages()
    console.log('Player Cards', playerCards);
    // Draw two cards for computer
    let compCards = getTwoImages()
    console.log('Computer Cards', compCards);
    
    if (compCards[0] == compCards[1] && playerCards[0] == playerCards[1]) {
        console.log('It\'s a tie!');
        winner = 'It\'s a tie!'
    } else if (playerCards[0] !== playerCards[1] && compCards[0] !== compCards[1]) {
        console.log('Sorry, you both lost!');
        winner = 'Sorry, you both lost!'
    } else if (compCards[0] == compCards[1]) {
        console.log('Computer Scores!')
        winner = 'Computer Scores'
        computerScore += 1
        computerScoreBoard.innerHTML = computerScore
        console.log('Computer Score', computerScore)
    } else {
        console.log('Player Scores!');
        winner = 'Player Scores'
        playerScore += 1
        playerScoreBoard.innerHTML = playerScore
        console.log('Player Score', playerScore)
    }

    function cardCollected (i){
    
    const img2 = document.createElement('img')
    sevenHorx.appendChild(img2)
    img2.src = hpImages[i].image
    img2.style.width = '100px'
    img2.style.height = '150px'
    img2.style.border = "solid"
    img2.style.borderColor = "orange"
    img2.style.margin = "5px"
    }

    if (playerScore === 5 || computerScore === 5){
        console.log('You earned the Helga Cup!');
        cardCollected(2) 
        playerScore++
        computerScore++
    } else if(playerScore === 10 || computerScore === 10){
        console.log('You earned Tom\'s Diary!');
        cardCollected(5)
        playerScore++
        computerScore++
    } else if(playerScore === 15 || computerScore === 15){
        console.log('You earned Voldemort\'s Ring!');
        cardCollected(6)
        playerScore++
        computerScore++
    } else if(playerScore === 20 || computerScore === 20){
        console.log('You earned Ravenclaw Diadem!');
        cardCollected(4)
        playerScore++
        computerScore++
    } else if(playerScore === 25 || computerScore === 25){
        console.log('You earned the Slytherin Locket!');
        cardCollected(3)
        playerScore++
        computerScore++
    } else if(playerScore === 30 || computerScore === 30){
        console.log('You earned Nagini!')
        cardCollected(0)
        playerScore++
        computerScore++
    } else if(playerScore === 35 || computerScore === 35){
        console.log('You earned Harry! You collected all the Seven Horcruxes!! Game over!')
        cardCollected(1)
        playerScore++
        computerScore++
    } else{
        console.log('Keep Clicking!');
    }
    return [playerCards, compCards, winner]
};
// console.log('Winner', winner);
draw.addEventListener('click', playGame)

const cardStack = document.querySelector('.cardStack')

const resetGame = () => {
    div.innerHTML =''
    playerScoreBoard.innerHTML = 0
    playerScore = 0
    computerScore = 0
    computerScoreBoard.innerHTML = 0
    while (sevenHorx.firstChild) {
    sevenHorx.removeChild(sevenHorx.firstChild)
    }
  
    // cardStack.innerHTML = ''
}
reset.addEventListener('click', resetGame)

