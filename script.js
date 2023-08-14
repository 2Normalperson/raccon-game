let strength = 10;
let defense = 8;
let playerHp = 100;
let enemy = "goomba";
let playerHealthBar = document.querySelector(".p_health_bar");
let options = document.querySelector(".options");
let textBox = document.querySelector(".text_box");

function attackButton() {
  playerHealthBar.style.display = "none";
  options.style.display = "none";
  textBox.innerHTML = "You attacked the " + enemy ;
}

function healButton() {
  playerHealthBar.style.display = "none";
  options.style.display = "none";
  textBox.innerHTML = "You attacked the " + enemy ;
}

function runButton() {
  playerHealthBar.style.display = "none";
  options.style.display = "none";
  textBox.innerHTML = "You attacked the " + enemy ;
}