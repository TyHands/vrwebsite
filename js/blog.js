let pageTitle = document.getElementById("page-title")
const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('id');

fetch('https://vintagerevelations.co.uk:8443/blog-post/' + blogID)
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
   let contentDiv = document.getElementById("blog-content")

   contentDiv.innerHTML = "";


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


   contentDiv.appendChild(metaInfDiv)

   for (let i = 0; i < paragraphs.length; i++) {
      let sectionDiv = create_blog_section(pictures[i], subtitles[i], paragraphs[i])
      contentDiv.appendChild(sectionDiv)

      if (i < paragraphs.length - 1) {
         contentDiv.appendChild(create_cta_banner())
      }
   }



}

function create_blog_section(picture, subtitle, paragraph){
   let topDiv = document.createElement("div")
   topDiv.classList.add("container", "row")

   if (picture) {
      let img = document.createElement("img")
      img.src = picture
      img.classList.add("blog-img")
      topDiv.appendChild(img)
   }

   if (subtitle) {
      let st = document.createElement("h5")
      st.innerHTML = subtitle;
      st.classList.add("bold")
      topDiv.appendChild(st)
   }

   if (paragraph) {
      let para = document.createElement("p")
      para.innerHTML = paragraph;
      topDiv.appendChild(para)
   }

   return topDiv;
}

function create_cta_banner(){
   let ctaDiv = document.createElement("div")
   ctaDiv.classList.add("cta-banner", "section", "valign-wrapper")

   let innerDiv = document.createElement("div")
   innerDiv.classList.add("valign-wrapper")

   let ctaHeader = document.createElement("h6")
   ctaHeader.classList.add("hide-on-small-only", "cta-header")
   ctaHeader.innerHTML = "Need domicillary care? Give us a call."

   let phoneLink = document.createElement("a")
   phoneLink.href = "tel:01452 947520"
   phoneLink.classList.add("phone-number-btn", "pulse")

   let phoneIcon = document.createElement("i")
   phoneIcon.classList.add("material-icons", "small")
   phoneIcon.innerHTML = "local_phone"

   phoneLink.appendChild(phoneIcon)
   innerDiv.appendChild(ctaHeader)
   innerDiv.appendChild(phoneLink)
   ctaDiv.appendChild(innerDiv)

   return ctaDiv
}
