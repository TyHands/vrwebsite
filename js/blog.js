let pageTitle = document.getElementById("page-title")
const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('id');

fetch('http://localhost:8080/blog-post/' + blogID)
.then(response => response.json())
.then(data => {generate_blog(data)})


function generate_blog(blog){
   let title = blog.title;
   let supportingText = blog.supportingText;
   let author = blog.author;
   let date = blog.date;

   let subtitles = blog.subtitles;
   let pictures = blog.pictures;
   let paragraphs = blog.paragraphs;


   //Main top section
   let topDiv = document.getElementById("blog-top")

   //Main middle section
   let midDiv = document.getElementById("blog-mid")

   //Main bottom section
   let botDiv = document.getElementById("blog-bot")


   //Meta data info, author etc
   let metaInfDiv = document.createElement("div")
   metaInfDiv.classList.add("container")

   let titleElement = document.createElement("h4")
   titleElement.innerHTML = title;
   titleElement.classList.add("bold")

   let supportingTextElement = document.createElement("h5")
   supportingTextElement.innerHTML = supportingText
   supportingTextElement.classList.add("blog-support-text") 
   
   let authorElement = document.createElement("p")
   authorElement.innerHTML = "by " + author + " on " + date;
   authorElement.classList.add("blog-subtext", "flowtext")

   metaInfDiv.appendChild(titleElement)
   metaInfDiv.appendChild(supportingTextElement)
   metaInfDiv.appendChild(authorElement)


   //Creating sections using modular section function
   let topDuoDiv = create_blog_section(pictures[0], subtitles[0], paragraphs[0])
   let midDuoDiv = create_blog_section(pictures[1], subtitles[1], paragraphs[1])
   let botDuoDiv = create_blog_section(pictures[2], subtitles[2], paragraphs[2])


   //attaching top div
   topDiv.appendChild(metaInfDiv)
   topDiv.appendChild(topDuoDiv)

   //attaching mid div
   midDiv.appendChild(midDuoDiv)

   //attaching bot div
   botDiv.appendChild(botDuoDiv)



}

function create_blog_section(picture, subtitle, paragraph){
   let topDiv = document.createElement("div")
   topDiv.classList.add("container", "row")

   let img = document.createElement("img")
   img.src = picture
   img.classList.add("blog-img")

   let st = document.createElement("h5")
   st.innerHTML = subtitle;
   st.classList.add("bold")

   let para = document.createElement("p")
   para.innerHTML = paragraph;

   topDiv.appendChild(img)
   topDiv.appendChild(st)
   topDiv.appendChild(para)

   return topDiv;
}
