const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('id');

fetch('https://vintagerevelations.co.uk:8443/blog-post/' + encodeURIComponent(blogID))
.then(response => response.json())
.then(data => {generate_blog(data)})
.catch(error => console.error("Failed to load blog post", error))


function generate_blog(blog){
   const title = blog.title;
   const supportingText = blog.supportingText;
   const author = blog.author;
   const date = blog.date;

   const subtitles = Array.isArray(blog.subtitles) ? blog.subtitles : [];
   const pictures = Array.isArray(blog.pictures) ? blog.pictures : [];
   const paragraphs = Array.isArray(blog.paragraphs) ? blog.paragraphs : [];

   const contentDiv = document.getElementById("blog-content");
   if (!contentDiv) {
      return;
   }

   contentDiv.innerHTML = "";


   //Meta data info, author etc
   const metaInfDiv = document.createElement("div")
   metaInfDiv.classList.add("container")

   const titleElement = document.createElement("h4")
   titleElement.textContent = title;
   titleElement.classList.add("bold")

   const supportingTextElement = document.createElement("h5")
   supportingTextElement.textContent = supportingText
   supportingTextElement.classList.add("blog-support-text") 
   
   const authorElement = document.createElement("p")
   authorElement.textContent = "by " + author + " on " + date;
   authorElement.classList.add("blog-subtext", "flowtext")

   metaInfDiv.appendChild(titleElement)
   metaInfDiv.appendChild(supportingTextElement)
   metaInfDiv.appendChild(authorElement)


   contentDiv.appendChild(metaInfDiv)

   const sectionCount = Math.max(pictures.length, subtitles.length, paragraphs.length)

   for (let i = 0; i < sectionCount; i++) {
      const sectionDiv = create_blog_section(pictures[i], subtitles[i], paragraphs[i])
      contentDiv.appendChild(sectionDiv)

      if (i < sectionCount - 1) {
         contentDiv.appendChild(create_cta_banner())
      }
   }



}

function create_blog_section(picture, subtitle, paragraph){
   const topDiv = document.createElement("div")
   topDiv.classList.add("container", "row")

   if (picture) {
      const img = document.createElement("img")
      img.src = picture
      img.classList.add("blog-img")
      img.loading = "lazy"
      topDiv.appendChild(img)
   }

   if (subtitle) {
      const st = document.createElement("h5")
      st.innerHTML = subtitle;
      st.classList.add("bold")
      topDiv.appendChild(st)
   }

   if (paragraph) {
      const para = document.createElement("p")
      para.innerHTML = paragraph;
      topDiv.appendChild(para)
   }

   return topDiv;
}

function create_cta_banner(){
   const ctaDiv = document.createElement("div")
   ctaDiv.classList.add("cta-banner", "section", "valign-wrapper")

   const innerDiv = document.createElement("div")
   innerDiv.classList.add("valign-wrapper")

   const ctaHeader = document.createElement("h6")
   ctaHeader.classList.add("hide-on-small-only", "cta-header")
   ctaHeader.textContent = "Need domicillary care? Give us a call."

   const phoneLink = document.createElement("a")
   phoneLink.href = "tel:01452 947520"
   phoneLink.classList.add("phone-number-btn", "pulse")

   const phoneIcon = document.createElement("i")
   phoneIcon.classList.add("material-icons", "small")
   phoneIcon.textContent = "local_phone"

   phoneLink.appendChild(phoneIcon)
   innerDiv.appendChild(ctaHeader)
   innerDiv.appendChild(phoneLink)
   ctaDiv.appendChild(innerDiv)

   return ctaDiv
}
