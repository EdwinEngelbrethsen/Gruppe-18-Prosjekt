// Selecting Elements
const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");
const content = document.querySelector("content");
const input = document.getElementById("input");

// fill listeners
fill.addEventListener('dragStart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragLeave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag functions NO TOUCHING
function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
  this.className = 'fill';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = ' empty';
  this.append(fill);
}
