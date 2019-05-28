const list = document.getElementById("list");
const clear = document.querySelector(".clear");
const input = document.getElementById("input");

//variables
let LIST, id;

//get item from localStorage
let data = localStorage.getItem("TODO");

//check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); //load the list to the user interface
} else {
    //if data isnt empty
    LIST = [];
    id = 0;
}

//load items to the users interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});


//funksjon for å lage en ny tittel
function writeToDo(toDo, id, trash){
    
    if(trash){ return; }
    
    const LINE = done ? LINE_THROUGH : "";
    
    const item = ` <li class="item">
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="fa fa-trash-o de" job="complete" id="${id}"></i>
                        <input type="text" id="input" placeholder="add">
                    </li>
                    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

// funksjon for å trykke enter for å lage ny tittel
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        //if the input isnt emty
        if(toDo){
            addToDo(toDo, id, false);
            
            LIST.push({
                name: toDo,
                id: id,
                trash: false
            });
            
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
    
});