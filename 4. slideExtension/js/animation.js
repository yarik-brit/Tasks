var pages = document.getElementsByClassName('page');
// Returns the left position of given element 
function getLeftPosition(elem) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue('left').replace('px', ''));
}
// Animates the swipe effect
export default function animation(datasetText) {
  console.log(document.getElementById(this.dataset.text));
  if(datasetText != "")
    var elem = document.getElementById(this.dataset.text);
  else
    var elem = document.getElementById(datasetText);
  var pos = 0;
  var left_pos = getLeftPosition(elem);
  var id = setInterval(frame, 25);
  
  //Desides whether swipe to the left or to the right
  var sign = (left_pos > 0) ? -1 : 1;
  
  // Moves pages left or right until  the chosen page
  // appears on the screen (left position of page == 0)
  function frame() {
    if (getLeftPosition(elem) == 0) {
      clearInterval(id);
    } else {
      pos = 50 * sign; 
      for(var i = 0; i < pages.length; i++) {
        var item = pages[i];
        var new_pos = getLeftPosition(item) + pos;
        item.style.left = new_pos + 'px';
      } 
    }
  }
  if(elem.id == "login"){
    document.getElementById("header").innerText = "Login page";
    document.getElementById("swapButton").innerText = "Register";
    document.getElementById("swapButton").dataset.text = "register";
  }
  if (elem.id == "register"){
    document.getElementById("header").innerText = "Registration page";
    document.getElementById("swapButton").innerText = "Login";
    document.getElementById("swapButton").dataset.text = "login";
  }
  if (elem.id == "cabinet"){
    document.getElementById("header").innerText = "User cabinet";
    document.getElementById("swapButton").innerText = "Logout";
    document.getElementById("swapButton").dataset.text = "login";
  }
}
if(document.getElementById('swapButton')!=null)
  document.getElementById('swapButton').addEventListener("click", animation);