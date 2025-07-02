M.AutoInit();


// Sidenav stuff, probably dont touch
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });




  // Navbar dynamic

  let navbar = document.getElementById("vrnav")
  navbar.innerHTML = 
  '<div class="row valign-wrapper white lato-custom no-margin">' +
  '<div class="custom-nav col s6 nav-wrapper">' +
      '<a href="index.html"><img src="res/VRLOGO.png" class="left logo_img" href="index.html"></a>' +
  '</div>' +
  '<div class="custom-nav col s6 nav-wrapper">' +
    '<a href="#" data-target="dropdown" class="sidenav-trigger black-text right menu-bar"><i class="small material-icons">menu</i></a>' +
  '</div>' +
  '<div class="col s8 hide-on-med-and-down">' +
      '<a href="careers.html" class="black-text custom-nav-hover nav-button col s3 center-align">Careers</a>' +
      '<a href="about.html" class="black-text custom-nav-hover col s3 center-align">About</a>' +
      '<a href="services.html" class="black-text custom-nav-hover col s3 center-align">Services</a>' +
      '<a href="contact.html" class="black-text custom-nav-hover col s3 center-align">Contact</a>' +
  '</div>' +
  '<div class="col s1"></div>' +
'</div>' +
'<div class="banner-attachment center-align">Know a carer who always shows up, gives their all, and makes a real difference? <a href="https://forms.gle/jmxQ34WSEswTM2oX9" class="black-text" target="_blank"><u>Nominate them here</u></a></div>'


function sendSubEmail(id){
  let emailInput = document.getElementById(id)
  let email = emailInput.value;

   fetch('https://localhost:8443/storeemail', {
        method: "POST",
		headers: {
			"Content-Type": "application/json",

		  },
        body: JSON.stringify(
            {
                "email":email, 
            }
        )
    })
    .then(response => handlePostResponse(email))
}

function handlePostResponse(email){
  console.log(email + " Subscribed")

  // do some kind of front end feedback
  div = document.getElementById("emailsubdiv")
  div.innerHTML = '<i class="material-icons small">check</i>'
}