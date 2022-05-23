let button = document.getElementsByClassName("btn btn-dark btn-block");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.style.backgroundColor = "#FFC4E1";
    this.style.color = "black";
    this.textContent = 'Перейти в корзину';
    var audio = new Audio ('sounds/add.mp3');
        audio.play();
  });
}
let h3 = document.querySelector('h3')
h3.addEventListener('mouseover', function() {
  h3.style.color = "white"
})
h3.addEventListener('mouseout', function() {
  h3.style.color = ""
})
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
function myFunction() {
  alert("You pressed a key inside the input field");
}
