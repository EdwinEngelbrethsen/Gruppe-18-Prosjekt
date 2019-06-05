/* id01 = cardEdit */

// henter elementer fra html
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
// Dato
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

// Dato funksjonene
const options = { weekday : 'long', month : 'short', day : 'numeric'};
const today = new Date();

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// klasse navn
const CHECK = "";
const UNCHECK = "";

// Variabler
let LIST, id;

// henter item fra localstorage
let data = localStorage.getItem("TODO");

// sjekker at data ikke er tomt
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // setter id'en som den neste i arrayet
    loadList(LIST); // laste listen til brukeren
}else{
    // viss data ikke er tom
    LIST = [];
    id = 0;
}

// las items til brukeren
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});


// legg til en to-do funksjon
function addToDo(toDo, id, done, trash){

    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;

    const item = `<li class="item">
                    <input type="color" id="favcolor" name="favcolor" value="#ff0000">

                    <p class="text">${toDo}</p>
                    <i class="fa fa-edit" onclick="document.getElementById('id01').style.display='block'" id="${id} "></i>


                    <button type="button" id="exclemation1" onclick="addingPriority1(this)">!</button>

                    <button type="button" id="exclemation2" onclick="addingPriority2(this)">!!</button>

                    <button type="button" id="exclemation3" onclick="addingPriority3(this)">!!!</button>

                    <i class="fa fa-trash" job="delete"  id="${id}"></i>

                  </li>
                `;
    /* posisjonen for hvor nye items skal legge seg */
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}



// legg til ett item til listen ved at bruker trykker på "enter"
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        // vist brukerens input ikke er tomt
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            // legg til item til localstorage
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});



// slett to-do punkt
function removeToDo(element){

    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}



/* velger items som er laget dynamsisk, må til at det er mulig å trykke på f.eks slett ikonet */
list.addEventListener("click", function(event){
    const element = event.target; // returner elementet som blir trykket på inni listen
    const elementJob = element.attributes.job.value;

    //slett
    if(elementJob == "delete"){
        removeToDo(element);
    }

    // legg til item til localstorage
    localStorage.setItem("TODO", JSON.stringify(LIST));
});


//----------------------------------------------------------------------------------------------

/*Sette forfallsdato i redigerings - kortet*/
function myFunction() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;
}


/* ------- utropstegn ----- */


    function addingPriority1(e) {
        e.style = "box-shadow: 0px 0px 5px rgb(255, 0, 0);"
        }



   function addingPriority2(e) {
        e.style = "box-shadow: 0px 0px 5px rgb(255, 0, 0);"
        document.getElementById("exclemation2")
            console.log("!!");
        }



        function addingPriority3(e) {
        e.style = "box-shadow: 0px 0px 5px rgb(255, 0, 0);"
        document.getElementById("exclemation3");
            console.log("!!!");
        }



/* Drag and drop function */
    const sortable = new Sortable.default(document.querySelectorAll('.content ul'), {
        draggable: 'li.item'
    });

    sortable.on('sortable:start', () => {
        console.log('sortable:start')
    });

    sortable.on('sortable:sort', () => {
        console.log('sortable:sort')
    });

    sortable.on('sortable:sorted', () => {
        console.log('sortable:sorted')
    });

    sortable.on('sortable:stop', () => {
        console.log('sortable:stop')
    });
