const addNoteButton = document.getElementById("addNoteButton");
const noteList = document.getElementById("noteList");
const modal = document.getElementById("modal");
const modalNoteContent = document.getElementById("modalNoteContent");
const closeButton = document.getElementById("detailsButton");

addNoteButton.addEventListener("click", addNote);
noteList.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function addNote(){
    const noteContent = noteText.value;

    if (noteContent.trim() !== ""){
        const note = document.createElement("div");
        note.classList.add('note');
        note.textContent = noteContent.length > 80 ? noteContent.substring(0, 80) + "..." : noteContent;

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.classList.add('detailsButton');

        note.dataset.fullContent = noteContent;

        note.appendChild(detailsButton);
        noteList.appendChild(note);
        noteText.value = "";
        
    }
}