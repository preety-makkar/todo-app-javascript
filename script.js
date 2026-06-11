const card = document.getElementsByClassName("card")[0];
const ul = document.getElementsByTagName("ul")[0];
let tasks = [];

//----------------Add Item Button-----------------
const add_btn = document.getElementById("add");
add_btn.addEventListener("click", function () {
  if (document.querySelector(".add-inp")) return;
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter item");
  input.setAttribute("class", "add-inp");

  card.append(input);

  input.focus();

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
      //array append kr do
      //list append kr do
      console.log("Enter pressed");
      const val = input.value.trim();

      tasks.push(val);

      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerHTML =
        val +
        "<button class='li-button done-btn'>Done</button>" +
        "<button class='li-button edit-btn'>Edit</button>" +
        "<button class='li-button rem-btn'>Remove</button>";
      ul.append(li);
      input.remove();
    }
  });
});

//----------------Remove Item-----------------
//li delete
//array item delete
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("rem-btn")) {
    const val = event.target.parentElement.firstChild.textContent.trim();
    console.log("value" + val);
    //tasks = tasks.filter((t) => t !== val);
    const index = tasks.indexOf(val);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    console.log(tasks);
    event.target.parentElement.remove();
  }
});

//const input = document.getElementsByClassName("inp");

//----------------Done Button-----------------
//li update as strikethrough
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("done-btn")) {
    const li = event.target.parentElement;
    li.classList.toggle("strike");

    if (li.classList.contains("strike")) {
      event.target.textContent = "Undo";
    } else {
      event.target.textContent = "Done";
    }
  }
});

//----------------Edit Button-----------------
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    const li = event.target.parentElement;
    if (li.querySelector("input")) return;
    const oldValue = li.firstChild.textContent.trim();

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter item");
    input.setAttribute("class", "edit-inp");

    li.append(input);
    input.value = oldValue;
    input.focus();

    input.addEventListener("keydown", function (event) {
      const val = input.value.trim();
      if (event.key === "Enter" && val !== "") {
        const index = tasks.indexOf(oldValue);
        if (index !== -1) {
          tasks.splice(index, 1, val);
          li.firstChild.textContent = val;
          input.remove();
        }
      }
    });
    //li select
    //li innertext goes to label
    //label provide
    //array mein item replace (splice)
    //enter -> innertext change
  }
});
