const accordion = document.querySelectorAll(".contents");
const showAnsMinus = document.querySelectorAll(".showAnsMinus");
const answers = document.querySelectorAll(".answers");
const icons = document.querySelectorAll(".icons");
const showAnsPlus = document.querySelectorAll("#showAnsPlus");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    //  icons.innerHTML.childNodes = showAnsMinus
  });
}
