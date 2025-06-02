
fetchBlogs();


function fetchBlogs(){
    fetch('https://vintagerevelations.co.uk:8080/allblogs')
    .then(response => response.json())
    .then(data => {createBlogCards(data)})
}

function createBlogCards(data){
    let mainDiv = document.getElementById("blog-holder")

    for (var i = 0; i < data.length; i++){
        let card = createBlogCard(data[i].pictures, data[i].title, data[i].id)
        mainDiv.appendChild(card)
    }
}

function createBlogCard(imgs, title, id){
    console.log(id)
    let mainCardDiv = document.createElement("div")
    mainCardDiv.classList.add("col")
    mainCardDiv.classList.add("s12")
    mainCardDiv.classList.add("m6")
    mainCardDiv.addEventListener("click", function(e){
        blogClicked(id)
    })
    

    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("vr-card")
    mainCardDiv.appendChild(card)

    let cardImageHolder = document.createElement("div")
    cardImageHolder.classList.add("card-image")
    cardImageHolder.classList.add("vr-card-img-holder")
    card.appendChild(cardImageHolder)

    let cardImage = document.createElement("img")
    cardImage.src = imgs[0]
    cardImage.classList.add("responsive-img")
    cardImage.classList.add("vr-card-img")

    let cardTitle = document.createElement("h6")
    cardTitle.classList.add("center-align")
    cardTitle.classList.add("vr-card-title")
    cardTitle.innerHTML = "<b>" + title + "</b>"
    cardImageHolder.appendChild(cardImage)
    cardImageHolder.appendChild(cardTitle)

    return mainCardDiv
}

function blogClicked(id){
    window.location.href = "blog.html?&id=" + id
}