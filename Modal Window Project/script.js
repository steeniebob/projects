"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// use querySelectorAll for all with that class.

console.log(btnsOpenModal);

// to do something with all the buttons in that querySelectorAll, we can use the for loop (this shows the text content of each element of btnsOpenModal):

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//reacting to a click
//function to close modal and hide overlay

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("hidden")) {
      return;
    } else {
      closeModal();
    }
  }
});

//some of the event listeners are 'keydown', 'keyup', and 'keypress'.
