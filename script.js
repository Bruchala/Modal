"use strict";
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const overflay = document.querySelector(".overflay");
const close1 = document.querySelector(".close-modal1");
const close2 = document.querySelector(".close-modal2");
const show1 = document.querySelector(".modal-show1");
const show2 = document.querySelector(".modal-show2");
const closeArrow1 = document.querySelector(".arrow2");
const closeArrow2 = document.querySelector(".arrow5");
const changeArrow1 = document.querySelector(".arrow1");
const changeArrow2 = document.querySelector(".arrow3");
const changeArrow3 = document.querySelector(".arrow4");
const changeArrow4 = document.querySelector(".arrow6");

//Modal 1
const openModal1 = () => {
  modal1.classList.remove("hidden");
  overflay.classList.remove("hidden");
};
show1.addEventListener("click", openModal1);
//Modal 2
const openModal2 = () => {
  overflay.classList.remove("hidden");
  modal2.classList.remove("hidden");
};
show2.addEventListener("click", openModal2);
//Close modal
const closeModal = () => {
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  overflay.classList.add("hidden");
};
overflay.addEventListener("click", closeModal);
closeArrow1.addEventListener("click", closeModal);
closeArrow2.addEventListener("click", closeModal);
close1.addEventListener("click", closeModal);
close2.addEventListener("click", closeModal);
//Change modal
const change1 = () => {
  modal1.classList.add("hidden");
  modal2.classList.remove("hidden");
};
changeArrow1.addEventListener("click", change1);
changeArrow2.addEventListener("click", change1);
const change2 = () => {
  modal1.classList.remove("hidden");
  modal2.classList.add("hidden");
};
changeArrow3.addEventListener("click", change2);
changeArrow4.addEventListener("click", change2);
