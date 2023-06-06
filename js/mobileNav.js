/* Toggle between adding and removing the "responsive" class to navBar when the user clicks on the icon */
function mobileNav() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }