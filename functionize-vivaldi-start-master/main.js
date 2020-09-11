// Vivaldi JS Example

// When a Season Button is Clicked
document.getElementById("summerBtn").addEventListener("click", displaySeason);
document.getElementById("autumnBtn").addEventListener("click", displaySeason);
document.getElementById("winterBtn").addEventListener("click", displaySeason);
document.getElementById("springBtn").addEventListener("click", displaySeason);

// Event Functions
function displaySeason(season, picture1, colour) {
  // - change concerto text

  document.getElementById("season-text").innerHTML = season;

  // - change main image
  document.getElementById("main-img").src = "images/" + season + ".jpg";

  // - change page background color
  document.body.style.backgroundColor = ""+ season;

  // - change audio source
  document.getElementById("song").src = "songs/vivaldi-" + season + ".mp3";

  // - remove active class from all buttons
  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  // - add active class to clicked button
  document.getElementById(season + "Btn").classList.add("activeBtn");
}
function setSummer() {}
#1BA848
function setAutumn() {
  // - change concerto text
  document.getElementById("season-text").innerHTML = "autumn";

  // - change main image
  document.getElementById("main-img").src = "images/autumn.jpg";

  // - change page background color
  document.body.style.backgroundColor = "#FE6732";

  // - change audio source
  document.getElementById("song").src = "songs/vivaldi-autumn.mp3";

  // - remove active class from all buttons
  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  // - add active class to clicked button
  document.getElementById("autumnBtn").classList.add("activeBtn");
}

function setWinter() {
  // - change concerto text
  document.getElementById("season-text").innerHTML = "winter";

  // - change main image
  document.getElementById("main-img").src = "images/winter.jpg";

  // - change page background color
  document.body.style.backgroundColor = "#1C64B9";

  // - change audio source
  document.getElementById("song").src = "songs/vivaldi-winter.mp3";

  // - remove active class from all buttons
  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  // - add active class to clicked button
  document.getElementById("winterBtn").classList.add("activeBtn");
}

function setSpring() {
  // - change concerto text
  document.getElementById("season-text").innerHTML = "spring";

  // - change main image
  document.getElementById("main-img").src = "images/spring.jpg";

  // - change page background color
  document.body.style.backgroundColor = "#0E94D1";

  // - change audio source
  document.getElementById("song").src = "songs/vivaldi-spring.mp3";

  // - remove active class from all buttons
  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  // - add active class to clicked button
  document.getElementById("springBtn").classList.add("activeBtn");
}
