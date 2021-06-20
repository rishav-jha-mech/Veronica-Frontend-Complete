
//Slide up button JS



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// NAvbar JS
document.getElementById('cross').style.display= "none";
function show(){
    document.getElementById('nav_links').style.display= "flex";
    document.getElementById('bgone').style.display= "none";
    document.getElementById('ham').style.display= "none";
    document.getElementById('cross').style.display= "block";
}
function hide(){
    document.getElementById('nav_links').style.display= "none";
    document.getElementById('bgone').style.display= "";
    document.getElementById('ham').style.display= "block";
    document.getElementById('cross').style.display= "none";
}
function link(){
    document.getElementById('nav_links').style.display= "none";
}
