const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-note");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create new note
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

// Delete note
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Save when typing
notesContainer.addEventListener("input", () => {
  updateStorage();
});

// Save line break on Enter
document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});