// Selecting Elements
const empties = document.querySelectorAll(".empty");
const card = document.querySelector(".card");

// card listeneres
card.addEventListener('dragstart', dragStart);
card.addEventListener('dragend', dragEnd);

// Loop Through empties
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


// Drag functions
function dragStart() {
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'card';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.className += 'empty';
}

function dragDrop() {
  this.className += ' empty';
  this.append(card);
}
