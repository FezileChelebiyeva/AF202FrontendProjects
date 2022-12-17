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
let errorMessage = document.querySelectorAll(".error-message-control");
let contactNameInput = document.querySelector("#contactNameInput");
let contactEmailInput = document.querySelector("#contactEmailInput");
let contactMessageInput = document.querySelector("#contactMessageInput");

let arrayContactMessage = JSON.parse(localStorage.getItem("Information")) || [];

sendMessageBtn.addEventListener("click", function (e) {
  e.preventDefault();
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
    alert("This field is required");
    // let textError = document.createElement("p");
    // textError = document.createElement("p");
    // textError.innerText = "This field is required";
    // textError.style.color = "red";

    // if (contactNameInput.value == "") {
    //   errorMessage[0].append(textError);
    // } else if (contactEmailInput.value == "") {
    //   errorMessage[1].append(textError);
    // } else if (contactMessageInput.value == "") {
    //   errorMessage[2].append(textError);
    // }
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

let arrayReservation = JSON.parse(localStorage.getItem("Reservation")) || [];

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
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
    alert("write");
  }

  checkIn.value = "";
  checkOut.value = "";
});

iconMenu.addEventListener("click", function () {
  nav.style.display = "block";
  faRemove.style.display = "block";

  blackBody.style.display = "block";
  blackBody.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  faRemove.addEventListener("click", function () {
    nav.style.display = "none";
    blackBody.style.display = "none";
  });
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
let arraySubscribe = JSON.parse(localStorage.getItem("Subscribe")) || [];

subscribeModalBbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (subscribeInput.value != "") {
    let subscribeObj = {
      email: subscribeInput.value,
    };
    arraySubscribe.push(subscribeObj);
    localStorage.setItem("Subscribe", JSON.stringify(arraySubscribe));
  } else {
    alert("write email");
  }

  subscribeInput.value = "";
});
