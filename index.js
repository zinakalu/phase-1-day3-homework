console.log("It works!")
//TODO: Look at the HTML and see what id you need to access
const catContainer = document.getElementById("cat-container")
const dogContainer = document.getElementById("dog-container")
const detailImage = document.getElementById("detail-image")
//TODO: Open your json server
//! If you need to a refresher on this, the command for this is
//! pinned to the slack channel
//TODO: Fetch the cats that exist in the database
//TODO: Create a div element for each cat and append to "cat-container"
//TODO: Iterate through your data and add it to the cat div,
//TODO: Create an h3, img, and p tag to hold your data and
//TODO: append it to the created div
//////////////////////////////////////////////////////////////
fetch("http://localhost:3000/cats")
.then(response => response.json())
.then(data => {
detailImage.src = data[0].image
data.forEach(data => {
const div = document.createElement("div")
catContainer.append(div)
const h3 = document.createElement("h3")
const img = document.createElement("img")
const p = document.createElement("p")
div.append(h3, img, p)
h3.innerText = data.name
img.src = data.image
p.innerText = data.breed
div.addEventListener("click", ()=>{
detailImage.src = data.image
})

})

})

async function fetchDogs(){
let response = await fetch("http://localhost:3000/dogs")
let data = await response.json()
data.forEach(data => {
const div = document.createElement("div")
dogContainer.append(div)
const h3 = document.createElement("h3")
const img = document.createElement("img")
const p = document.createElement("p")
div.append(h3, img, p)
h3.innerText = data.name
img.src = data.image
p.innerText = data.breed
})
}
fetchDogs()










//////////////////////////////////////////////////////////////
//TODO: Fetch again and repeat to add dogs to the "dog-container"
//////////////////////////////////////////////////////////////














//////////////////////////////////////////////////////////////