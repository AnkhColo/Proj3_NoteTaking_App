const addNoteButton = document.getElementById('addNote');
const noteText = document.getElementById('noteText');
const noteList = document.getElementById('noteList');
const modal = document.getElementById('modal');
const modalNoteContent = document.getElementById('modalNoteContent');
const closeButton = document.getElementById('closeButton');

addNoteButton.addEventListener('click', addNote);
noteList.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function addNote(){
    const noteContent = noteText.value;
    if(noteContent.trim() !=='') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = noteContent.length > 80 ? noteContent.substring(0, 80) + '...' : noteContent;
    
    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.classList.add('detailsButton');

    note.dataset.fullContent = noteContent;

    note.appendChild(detailsButton);
    noteList.appendChild(note);
    noteText.value = '';
    }

};


function openModal(event){
if (event.target.classList.contains('detailsButton')){
    const note = event.target.parentNode;
    const content = note.dataset.fullContent;
    modalNoteContent,textContent = content;
    modal.style.display = 'block';      
}
}
function closeModal(){
    modal.style.display = 'none';
    modalNoteContent.textContent = '';
}
window.addEventListener('click', (event) => {
    if (event.target === modal){
        closeModal();
    }
})