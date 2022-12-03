let searchBox = document.querySelector(".searchBox");
let inputEl = document.querySelector("#inputEl");
let addBtn = document.querySelector("#addBtn");
let deleteBtn = document.querySelector("#deleteBtn");
let box = document.querySelector(".box");
let icon = document.querySelector(".fa-regular");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputEl.value !== "") {
    box.style.color = "black";
    box.style.fontSize = "14px";
    box.style.padding = "0 30px";
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");

    text.className = "text";
    todo.style.backgroundColor = "rgb(123, 178, 226)";
    text.innerText = inputEl.value;
    todo.append(text);

    let divBtn = document.createElement("div");
    divBtn.className = "btnDiv";
    todo.appendChild(divBtn);

    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList = "newDelete delete";
    newDeleteBtn.innerText = "Delete";
    divBtn.appendChild(newDeleteBtn);

    let newEditBtn = document.createElement("button");
    newEditBtn.classList = "newEditBtn edit";
    newEditBtn.innerText = "Edit";
    divBtn.appendChild(newEditBtn);

    let icon2 = document.createElement("img");
    icon2.setAttribute("src", "./more.png");
    todo.append(icon2);

    box.appendChild(todo);
    newDeleteBtn.addEventListener("click", function () {
      todo.remove();
    });
    newEditBtn.addEventListener("click", function () {
      newDeleteBtn.innerText = "";
      newEditBtn.innerText = "";
      todo.remove();
      inputEl.value = text.innerText;
    });
    icon2.addEventListener("click", function () {
      if (divBtn.classList.contains("click")) {
        divBtn.classList.remove("click");
      } else {
        divBtn.classList.add("click");
      }
    });
    inputEl.value = "";
  } else {
    alert("Dear user, pleace write something <3");
  }
});
deleteBtn.addEventListener("click", function () {
  setTimeout(function () {
    box.innerText = " ";
  }, 2000);
  setTimeout(() => {
    box.innerText = "your to do deleted";
    box.style.color = "red";
    box.style.fontSize = "18px";
  }, 1000);
  inputEl.value = "";
});

inputEl.addEventListener("mouseover", function () {
  inputEl.style.boxShadow = "1px 1px 13px 0 blue";
});
inputEl.addEventListener("mouseout", function () {
  inputEl.style.boxShadow = "0px 0px 0px 0";
});
