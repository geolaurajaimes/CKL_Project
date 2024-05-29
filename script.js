//Owner: Alanah Reveler;
//Script for navbar when collasped
//From: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function Navbar() {
    var x = document.getElementById("myTopnav"); 
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className === "navbar"
    }
}

//Function for back-to-top button to bring back to the top once clicked
//From:  https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

//Code for to make back-to-top button appear once scrolled 
//From: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2

window.onscroll = function() {scrollTopButton()};

function scrollTopButton() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("topbutton").className = "top-show"; //changes class to top-show where display:block
  } else {
    document.getElementById("topbutton").className = "hide"; //keeps class to top-hide where display:none
  }
}

//Code for review button accordions style drop-down
//From https://www.w3schools.com/w3css/w3css_accordions.asp 
function Accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("panel-show") == -1) { 
    x.className += " panel-show"; //if the class isn't panel-show, switch to panel-show (display:block)
  } else { 
    x.className = x.className.replace("panel-show", ""); //if class id panel-show switch to default
  }
}
//Owner End:Alanah Reveler 

// Owner: Jordan Steinman
// submit alert function for contact us form
// From: https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
function submitalert() {
  alert("Your message has been submitted!");
}
//Owner End: Jordan Steinman
