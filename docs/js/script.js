function readFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML =
      '<div class="read-button"><span class="material-icons expand">expand_more</span><p class="read-button__text">Read All</p></div>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML =
      '<div class="read-button"><span class="material-icons expand">expand_less</span><p class="read-button__text">Read Less</p></div>';
    moreText.style.display = "inline";
  }
}

function displayWindowSize() {
  var w = document.documentElement.clientWidth;
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  if (w >= "1120") {
    moreText.style.display = "inline";
    dots.style.display = "none";
  } else if (w < "1050") {
    moreText.style.display = "none";
    dots.style.display = "inline";
  }
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();
