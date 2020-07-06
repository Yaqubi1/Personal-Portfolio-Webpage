/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0px";
  } else {
    document.getElementById("navbar-hover").style.top = "-50px";
    if (document.getElementById("navbar-container").style.height = "100px") {
      document.getElementById("navbar-container").style.top = "-100px";
    }
  }
  prevScrollpos = currentScrollPos;
}