var accordion = document.getElementsByClassName("accordion-item");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // var collapse = this.getElementsByClassName("collapse");
    this.classList.toggle("show");
  });
}
