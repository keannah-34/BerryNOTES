 <script>
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".create-note");

    function showNotes() {
      notesContainer.innerHTML = localStorage.getItem("notes") || "";
    }
    showNotes();

    function updateStorage() {
      localStorage.setItem("notes", notesContainer.innerHTML);
    }

    createBtn.addEventListener("click", () =>{
      let inputBox = document.createElement("p");
      let img = document.createElement("img");
      inputBox.className = "input-box";
      inputBox.setAttribute("contenteditable","true");
      img.src = "delete.png";
      inputBox.appendChild(img);
      notesContainer.appendChild(inputBox);
      updateStorage();
    });

    notesContainer.addEventListener("click",function (e) {
      if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
      }
    });

    notesContainer.addEventListener("input",() =>{
      updateStorage();
    });

    document.addEventListener("keydown", event =>{
      if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
      }
    });
     
  </script>
