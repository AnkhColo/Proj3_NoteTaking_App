const addNoteButton = document.getElementById("addNote");
const noteText = document.getElementById("noteText");
const noteList = document.getElementById("noteList");
const modal = document.getElementById("modal");
const modalNoteContent = document.getElementById("modalNoteContent");
const closeButton = document.getElementById("detailsButton");

addNoteButton.addEventListener("click", addNote);
noteList.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function addNote(){
    const noteContent = noteText.value;