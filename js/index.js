M.AutoInit();


// Sidenav stuff, probably dont touch
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });




  // Navbar dynamic

  let navbar = document.getElementById("vrnav")
  navbar.innerHTML = 
'<div class="row valign-wrapper white lato-nav no-margin nav-shadow nav-sizing">' +
  '<div class="custom-nav col s1 nav-wrapper">' +
    '<a href="index.html"><img src="res/VRLOGO.png" class="left logo_img" href="index.html"></a>' +
  '</div>' +
  '<div class="custom-nav col s6 nav-wrapper">' +
    '<a href="#" data-target="dropdown" class="sidenav-trigger black-text right menu-bar"><i class="small material-icons">menu</i></a>' +
  '</div>' +
  '<div class="col s11 hide-on-med-and-down">' +
    '<a href="careers.html" class="black-text custom-nav-hover nav-button col s2 center-align">Careers</a>' +
    '<a href="about.html" class="black-text custom-nav-hover nav-button col s2 center-align">About</a>' +
    '<a href="services.html" class="black-text custom-nav-hover nav-button col s2 center-align">Services</a>' +
    '<a href="bloglist.html" class="black-text custom-nav-hover nav-button col s2 center-align">Stories</a>' +
    '<a href="contact.html" class="white-text center-align nav-button vr-gold">Enquire Now</a>' +
  '</div>' +
'</div>' +
'<div class="banner-container lato-custom hide-on-med-and-down">' +
  '<div class="banner-left vr-gold">' +
    '<a href="https://vintagerevelations.co.uk/carecalc" class="white-text" target="_blank">' +
      'Use our free Care Calculator.' +
    '</a>' +
  '</div>' +
  '<div class="banner-right antique-white">' +
    '<a href="tel:01452947520" class="custom-gold-text lato-bold banner-phone">' +
      '<i class="small material-icons">local_phone</i>' +
      '01452 947520' +
    '</a>' +
  '</div>' +
'</div>';


function sendSubEmail(id){
  let emailInput = document.getElementById(id)
  let email = emailInput.value;

   fetch('https://vintagerevelations.co.uk:8443/storeemail', {
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
  div = document.getElementsByClassName("emailsubdiv")
  div.innerHTML = '<i class="material-icons small">check</i>'
}