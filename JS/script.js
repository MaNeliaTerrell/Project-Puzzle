


const hpImages = [
    {image: "https://d31wq3s92n4tkk.cloudfront.net/images/022362.jpg" },
    {image: "https://static.wikia.nocookie.net/harrypotter/images/5/52/Harry_Potter_%28HBP_promo%29_1.jpg/revision/latest?cb=20140422020440&path-prefix=it"},
    {image: "https://shop.universalorlando.com/merchimages/p-hufflepuff-cup-1297606.jpg"},
    {image: "https://www.theshopthatmustnotbenamed.co.uk/img/product/harry-potter-film-replica-salazar-slytherins-locket-in-display-case-12015945-600.jpg"},
    {image: "https://thefandomstuff.com/wp-content/uploads/2020/03/harry-potter-lost-ravenclaw-diadem-horcrux-3.jpg"},
    {image: "https://the-wizards-shop.com/1834-thickbox_default/basilisk-tooth-and-tom-riddle-diary.jpg"},
    {image: "https://www.thestoreofrequirement.com.au/assets/alt_1_thumb/1247.jpg?20200714030613"},                
]
console.log(hpImages);

const buttons = document.querySelector(".buttons")
const draw = document.querySelector("#draw")
const reset = document.querySelector("#reset")


// const setOfCards = document.querySelector("#set-of-cards")


  const setOfCards = document.querySelector("#set-of-cards")

const getImage = () => {
    let randomImage = hpImages[(Math.floor(Math.random() * hpImages.length))]
    const img = document.createElement('img')
    img.src = randomImage.image
    setOfCards.appendChild(img)
}
draw.addEventListener('click', getImage)

const div = document.querySelector('.buttons')