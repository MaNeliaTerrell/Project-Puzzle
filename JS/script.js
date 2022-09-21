


const hpImages = [
    { image: "https://pm1.narvii.com/6040/39f9068baceac545d7e81da88745e69e118b7ece_hq.jpg" },
    { image: "https://m.media-amazon.com/images/I/71diVvqlkSL._AC_SX385_.jpg" },
    { image: "https://shop.universalorlando.com/merchimages/p-hufflepuff-cup-1297606.jpg" },
    { image: "https://i.etsystatic.com/25263772/r/il/5c33cf/2544440414/il_570xN.2544440414_786k.jpg" },
    { image: "https://cdna.artstation.com/p/assets/images/images/018/885/272/large/gale-evangelista-1.jpg?1561101812" },
    { image: "https://the-wizards-shop.com/1834-thickbox_default/basilisk-tooth-and-tom-riddle-diary.jpg" },
    { image: "https://www.thestoreofrequirement.com.au/assets/alt_1_thumb/1247.jpg?20200714030613" },
]

const playerScoreBoard = document.getElementById("playerScoreBoard")
const computerScoreBoard = document.getElementById("computerScoreBoard")


console.log(hpImages);
const body = document.getElementsByTagName("body")
const buttons = document.querySelectorAll(".buttons")
const draw = document.querySelector("#draw")

let computerScore = 0
let playerScore = 0
let winner = '';
const div = document.querySelector("#set-of-cards")

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
    // Draw two cards for the player
    const playerCards = getTwoImages()
    console.log('Player Cards', playerCards);
    // Draw two cards for computer
    const compCards = getTwoImages()
    console.log('Computer Cards', compCards);
    // Check if cards match
    // if both drew matching cards, it's a tie
    // else if , computer cards match, computer wins;
    // else if, none gets matching cards, no one wins
    // else, player wins

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
    return [playerCards, compCards, winner]
};

console.log('Winner', winner);
draw.addEventListener('click', playGame)

//  const resetGame = () =>{

//  }
// reset.addEventListener('click', resetGame)