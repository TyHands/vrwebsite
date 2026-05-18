
fetchBlogs();


function fetchBlogs(){
    fetch('https://vintagerevelations.co.uk:8443/allblogs')
    .then(response => response.json())
    .then(data => {createBlogCards(data)})
    .catch(error => console.error("Failed to load blog list", error))
}

function createBlogCards(data){
    const mainDiv = document.getElementById("blog-holder")
    if (!mainDiv) {
        return;
    }

    for (let i = 0; i < data.length; i++){
        const card = createBlogCard(data[i].pictures, data[i].title, data[i].id)
        mainDiv.appendChild(card)
    }
}

function createBlogCard(imgs, title, id){
    const mainCardDiv = document.createElement("div")
    mainCardDiv.classList.add("col", "s12", "m6")
    mainCardDiv.addEventListener("click", function(e){
        blogClicked(id)
    })
    

    const card = document.createElement("div")
    card.classList.add("card", "vr-card")
    mainCardDiv.appendChild(card)

    const cardImageHolder = document.createElement("div")
    cardImageHolder.classList.add("card-image", "vr-card-img-holder")
    card.appendChild(cardImageHolder)

    const cardImage = document.createElement("img")
    cardImage.src = imgs[0]
    cardImage.classList.add("responsive-img", "vr-card-img")
    cardImage.loading = "lazy"
    cardImage.alt = title || "Blog image"

    const cardTitle = document.createElement("h6")
    cardTitle.classList.add("center-align", "vr-card-title")
    const titleBold = document.createElement("b")
    titleBold.textContent = title
    cardTitle.appendChild(titleBold)
    cardImageHolder.appendChild(cardImage)
    cardImageHolder.appendChild(cardTitle)

    return mainCardDiv
}

function blogClicked(id){
    window.location.href = "blog.html?id=" + encodeURIComponent(id)
}
