// //TODO: Look at the HTML and see what id you need to access
// const cat = document.getElementById('cat-container')
// //TODO: Open your json server
// //! If you need to a refresher on this, the command for this is
// //! pineed to the slack channel
// //TODO: Fetch the cats that exist in the database
// fetch("http://localhost:3000/cats")
// .then(response => response.json())
// .then(cats => cats.forEach(data =>{
// //TODO: Create a div element for each cat and append to "cat-container"
// const cat1 = document.createElement('div')
// cat.append(cat1)
// //TODO: Iterate through your data and add it to the cat div,
// //TODO: Create an h3, img, and p tag to hold your data and
// const h3tag = document.createElement ('h3');
// const imgtag = document.createElement('img');
// const ptag = document.createElement('p')
// //TODO: append it to the created div
// h3tag.append(div)
// imgtag.append(div)
// ptag.append(div)
// }
// ))

//////////////////////////////////////////////////////////////


const catContainer = document.getElementById("cat-container")
const detailImage = document.getElementById('detail-image') //Look at the HTML and see what id you need to access

fetch("http://localhost:3000/cats")
.then(response => response.json())
.then(data => {  //Fetch the cats that exist in the database
  // detailImage.src = data[0].image here, above the forEach
data.forEach(data =>{
const div = document.createElement('div')
catContainer.append(div) //TODO: Create a div element for each cat and append to "cat-container"
const h3 = document.createElement("h3") 
const img = document.createElement("img")
const p = document.createElement("p")  //TODO: Create an h3, img, and p tag to hold your data and
div.append(h3,img,p)   //TODO: append it to the newly created div
h3.innerText = data.name
img.src = data.image
p.innerText = data.breed
div.addEventListener('click', ()=>{ //the event listener is where it's going to listen to your click, so we used div 
  //so if we click on the whole div it'll modify the top image
detailImage.src = data.image
}) //we're modifying so if we click on any data.image it'll show up on top
 })
  detailImage.src = data[0].image //we're getting the 1st cat tf we do it outside the forEach 
  //because we don't want to iterate through the forEach. We just want the first cat. OR you can put it above the forEach
})














//////////////////////////////////////////////////////////////
//TODO: Fetch again and repeat to add dogs to the "dog-container"
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
const dogContainer = document.getElementById("dog-container")
async function fetchDogs(){
  let response = await fetch(' http://localhost:3000/dogs')
  let data = await response.json()
//   console.log(data)
data.forEach(data => {
  const div = document.createElement('div')
  dogContainer.append(div)
  const h3 = document.createElement('h3')
  const img = document.createElement('img')
  const p = document.createElement('p')
  div.append(h3, img, p)
  h3.innerText = data.name
  img.src = data.image
  p.innerText = data.breed
})
}

fetchDogs()
