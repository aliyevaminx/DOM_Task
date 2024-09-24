const btn = document.querySelector(".btn-add");
const btnRemove = document.querySelector("#clear-texts");
const input = document.querySelector("#text-input");
const todoList = document.querySelector(".todoList");
const alertMessages = document.querySelector(".form-row");

btn.addEventListener("click", () => {
  event.preventDefault();
  if (input.value.trim() == "") {
    const li = document.createElement("li");
    li.innerText = "Input required";
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "bg-danger",
      "p-3",
      "mb-2"
    );
    li.style.borderRadius = "10px";
    alertMessages.appendChild(li);

    setTimeout(function () {
      alertMessages.removeChild(li);
    }, 2000);
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item", "d-flex", "justify-content-between");

    const btnX = document.createElement("span");
    btnX.innerText = "X";
    btnX.style.cursor = "pointer";

    btnX.addEventListener("click", () => {
      li.style.textDecorationLine = "line-through";
    });

    todoList.appendChild(li);
    li.appendChild(btnX);

    const alertLi = document.createElement("li");
    alertLi.innerText = "Input required";
    alertLi.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "bg-success",
      "p-3",
      "mb-2"
    );
    alertLi.style.borderRadius = "10px";
    alertMessages.appendChild(alertLi);

    setTimeout(function () {
      alertMessages.removeChild(alertLi);
    }, 2000);
  }

  input.value = "";
});

btnRemove.addEventListener("click", () => {
  event.preventDefault();
  confirm("Are you sure?");
  todoList.innerText = "";
});

function addAndFade() {}
