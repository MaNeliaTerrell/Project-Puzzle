


const hpImages = [
    { image: "https://pm1.narvii.com/6040/39f9068baceac545d7e81da88745e69e118b7ece_hq.jpg"},
    { image: "https://m.media-amazon.com/images/I/71diVvqlkSL._AC_SX385_.jpg" },
    { image: "https://shop.universalorlando.com/merchimages/p-hufflepuff-cup-1297606.jpg" },
    { image: "https://i.etsystatic.com/25263772/r/il/5c33cf/2544440414/il_570xN.2544440414_786k.jpg" },
    { image: "https://cdna.artstation.com/p/assets/images/images/018/885/272/large/gale-evangelista-1.jpg?1561101812" },
    { image: "https://the-wizards-shop.com/1834-thickbox_default/basilisk-tooth-and-tom-riddle-diary.jpg" },
    { image: "https://www.thestoreofrequirement.com.au/assets/alt_1_thumb/1247.jpg?20200714030613" },
]

console.log(hpImages);
const body = document.getElementsByTagName("body")
const buttons = document.querySelectorAll(".buttons")
const draw = document.querySelector("#draw")
const reset = document.querySelector("#reset")

const div = document.querySelector("#set-of-cards")

const getTwoImages = () => {
    const arrayOne = []
    for(let i = 0; i < 2; i++){
        let card = hpImages[(Math.floor(Math.random() * hpImages.length))]
        arrayOne.push(card)
    const img = document.createElement('img')
    img.src = card.image
    img.style.width = '100px'
    img.style.height = '150px'
    div.appendChild(img)
    }
    return arrayOne
}

const playGame = () => {
    // Draw two cards for the player
    const playerCards = getTwoImages()
    console.log(playerCards);
    // Draw two cards for computer
    const compCards = getTwoImages()
    console.log(compCards);
    // Check if cards match
    // if both draw matching cards, it's a tie
    // else if , computer cards match, computer wins;
    // else if, none gets matching cards, no one wins
    // else, player wins
    // if()
}

draw.addEventListener('click', playGame)





const resetBtn = () => {
    const children = div.querySelector('img')
    // const list = Array.from(children)
  img.remove()
    // list.map(list => list.remove())

    // console.log(children);
}
reset.addEventListener('click', resetBtn)
