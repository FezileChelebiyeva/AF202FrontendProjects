let nav = document.querySelector(".nav");
let iconMenu = document.querySelector(".fa-bars");
let modalCloseIcon = document.querySelector(".modal-close-icon");
let faRemove = document.querySelector(".fa-remove");
let blackBody = document.querySelector(".black");
let livingroom = document.querySelector(".livingroom");
let diningroom = document.querySelector(".diningroom");
let bedroom = document.querySelector(".bedroom");
let livingroom2 = document.querySelector(".livingroom2");
let imgInfo = document.querySelector("#img-info");
let subscribeModal = document.querySelector("#subscribe-modal");
let subscribe = document.querySelector("#subscribe");
let subscribeBtn = document.querySelector(".subscribeBtn");

// for contact local storages
let sendMessageBtn = document.querySelector(".sendMessageBtn");
let contactNameInput = document.querySelector("#contactNameInput");
let contactEmailInput = document.querySelector("#contactEmailInput");
let contactMessageInput = document.querySelector("#contactMessageInput");

let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let messageError = document.querySelector(".messageError");

let arrayContactMessage = JSON.parse(localStorage.getItem("Information")) || [];

sendMessageBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";
  if (
    contactNameInput.value != "" &&
    contactEmailInput.value != "" &&
    contactMessageInput.value != ""
  ) {
    let messageObj = {
      username: contactNameInput.value,
      email: contactEmailInput.value,
      message: contactMessageInput.value,
    };
    arrayContactMessage.push(messageObj);
    localStorage.setItem("Information", JSON.stringify(arrayContactMessage));
  } else {
    nameError.style.color = "red";
    emailError.style.color = "red";
    messageError.style.color = "red";

    if (
      contactNameInput.value == "" &&
      contactEmailInput.value == "" &&
      contactMessageInput.value == ""
    ) {
      nameError.innerText = "This field is required";
      emailError.innerText = "This field is required";
      messageError.innerText = "This field is required";
    } else if (contactNameInput.value == "" && contactEmailInput.value == "") {
      nameError.innerText = "This field is required";
      emailError.innerText = "This field is required";
    } else if (
      contactEmailInput.value == "" &&
      contactMessageInput.value == ""
    ) {
      emailError.innerText = "This field is required";
      messageError.innerText = "This field is required";
    } else if (
      contactNameInput.value == "" &&
      contactMessageInput.value == ""
    ) {
      nameError.innerText = "This field is required";
      messageError.innerText = "This field is required";
    } else if (contactNameInput.value == "") {
      nameError.innerText = "This field is required";
    } else if (contactEmailInput.value == "") {
      emailError.innerText = "This field is required";
    } else {
      messageError.innerText = "This field is required";
    }
  }

  contactNameInput.value = "";
  contactEmailInput.value = "";
  contactMessageInput.value = "";
});

// for navbar search local strg
let searchBtn = document.querySelector(".searchBtn");
let checkIn = document.querySelector("#checkIn");
let checkOut = document.querySelector("#checkOut");
let adults = document.querySelector("#adults");
let kids = document.querySelector("#kids");

let navErrCheckIn = document.querySelector(".navErrCheckIn");
let navErrCheckOut = document.querySelector(".navErrCheckOut");
let errorAdults = document.querySelector(".errorAdults");
let errorKids = document.querySelector(".errorKids");

let arrayReservation = JSON.parse(localStorage.getItem("Reservation")) || [];

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navErrCheckIn.innerText = "";
  navErrCheckOut.innerText = "";
  errorAdults.innerText = "";
  errorKids.innerText = "";
  if (
    checkIn.value != "" &&
    checkOut.value != "" &&
    adults.value != "" &&
    kids.value != ""
  ) {
    let rentalObj = {
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      adults: adults.value,
      kids: kids.value,
    };

    arrayReservation.push(rentalObj);

    localStorage.setItem("Reservation", JSON.stringify(arrayReservation));
  } else {
    // alert("write");
    navErrCheckIn.style.color = "red";
    navErrCheckOut.style.color = "red";
    errorAdults.style.color = "red";
    errorKids.style.color = "red";
    if (
      checkIn.value == "" &&
      checkOut.value == "" &&
      adults.value == "" &&
      kids.value == ""
    ) {
      navErrCheckIn.innerText = "This field is required";
      navErrCheckOut.innerText = "This field is required";
      errorAdults.innerText = "This field is required";
      errorKids.innerText = "This field is required";
    } else if (checkIn.value == "" && checkOut.value == "") {
      navErrCheckIn.innerText = "This field is required";
      navErrCheckOut.innerText = "This field is required";
    } else if (checkIn.value == "") {
      navErrCheckIn.innerText = "This field is required";
    } else if (checkOut.value == "") {
      navErrCheckOut.innerText = "This field is required";
    } else if (adults.value == "" && kids.value == "") {
      errorAdults.innerText = "This field is required";
      errorKids.innerText = "This field is required";
    } else if (adults.value == "") {
      errorAdults.innerText = "This field is required";
    } else {
      errorKids.innerText = "This field is required";
    }
  }

  checkIn.value = "";
  checkOut.value = "";
});

iconMenu.addEventListener("click", function () {
  nav.classList.add("show");

  blackBody.style.display = "block";
  blackBody.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

faRemove.addEventListener("click", function () {
  blackBody.style.display = "none";
  nav.classList.remove("show");
});

livingroom.addEventListener("click", function () {
  document.getElementById("main-img").src = "./assets/images/livingroom.jpg";
  livingroom.style.opacity = "1";
  diningroom.style.opacity = "0.6";
  bedroom.style.opacity = "0.6";
  livingroom2.style.opacity = "0.6";
  imgInfo.innerHTML = "Living Room";
});
diningroom.addEventListener("click", function () {
  document.getElementById("main-img").src = "./assets/images/diningroom.jpg";
  diningroom.style.opacity = "1";
  livingroom.style.opacity = "0.6";
  bedroom.style.opacity = "0.6";
  livingroom2.style.opacity = "0.6";
  imgInfo.innerHTML = "Dining Room";
});
bedroom.addEventListener("click", function () {
  document.getElementById("main-img").src = "./assets/images/bedroom.jpg";
  bedroom.style.opacity = "1";
  diningroom.style.opacity = "0.6";
  livingroom.style.opacity = "0.6";
  livingroom2.style.opacity = "0.6";
  imgInfo.innerHTML = "Bedroom";
});
livingroom2.addEventListener("click", function () {
  document.getElementById("main-img").src = "./assets/images/livingroom2.jpg";
  livingroom2.style.opacity = "1";
  bedroom.style.opacity = "0.6";
  diningroom.style.opacity = "0.6";
  livingroom.style.opacity = "0.6";
  imgInfo.innerHTML = "Living Room II";
});

// for Subscribe display
subscribe.addEventListener("click", function () {
  subscribeModal.style.display = "block";

  modalCloseIcon.addEventListener("click", function () {
    subscribeModal.style.display = "none";
  });
});

subscribeBtn.addEventListener("click", function () {
  subscribeModal.style.display = "block";
  modalCloseIcon.addEventListener("click", function () {
    subscribeModal.style.display = "none";
  });
});

// for subscribe local stroges
let subscribeModalBbtn = document.querySelector(".subscribeModalBbtn");
let subscribeInput = document.querySelector("#subscribeInput");

let subsErrorEmail = document.querySelector(".subsErrEmail");

let arraySubscribe = JSON.parse(localStorage.getItem("Subscribe")) || [];

subscribeModalBbtn.addEventListener("click", function (e) {
  e.preventDefault();
  subsErrorEmail.innerText = "";

  if (subscribeInput.value != "") {
    let subscribeObj = {
      email: subscribeInput.value,
    };
    arraySubscribe.push(subscribeObj);
    localStorage.setItem("Subscribe", JSON.stringify(arraySubscribe));
  } else {
    // alert("write email");
    subsErrorEmail.innerText = "This field is required";
    subsErrorEmail.style.color = "red";
    subsErrorEmail.style.marginTop = "10px";
  }

  subscribeInput.value = "";
});
