

// henter elementer fra html
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

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
                    <input type="color" name="favcolor" value="#ff0000">
                    
                    <p class="text">${toDo}</p>
                    <i class="fa fa-edit" onclick="document.getElementById('id01').style.display='block'" id="${id} "></i>
                    <button type="button" id="exclemation1" onclick="addingPriority1()">!</button>
    
                    <button type="button" id="exclemation2" onclick="addingPriority2()">!!</button>
    
                    <button type="button" id="exclemation3" onclick="addingPriority3()">!!!</button>

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

 
    function addingPriority1() {
        document.getElementById("exclemation1");
   
        var wantAlarm = prompt("Do you want an alarm?");
        if(wantAlarm==="yes"){
            var milliseconds = parseInt(prompt("Type in number of seconds until alert"));
             var time = (milliseconds*1000);
        setTimeout(function() { alert("Your alarm is here motherfucker!!!"); }, time);
            console.log("!");
        }
        else{
            console.log("!");
        }
      
}
 
   function addingPriority2() {
        document.getElementById("exclemation2");
   
        var wantAlarm = prompt("Do you want an alarm?");
       
       if(wantAlarm==="yes"){
            var milliseconds = parseInt(prompt("Type in number of seconds until alert"));
             var time = (milliseconds*1000);
        setTimeout(function() { alert("Your alarm is here motherfucker!!!"); }, time);
            console.log("!!");
        }
        
       else{
            console.log("!!");
        }
      
}
 
        function addingPriority3() {
        document.getElementById("exclemation3");
   
        var wantAlarm = prompt("Do you want an alarm?");
        
            if(wantAlarm==="yes"){
            var milliseconds = parseInt(prompt("Type in number of seconds until alert"));
             var time = (milliseconds*1000);
        setTimeout(function() { alert("Your alarm is here motherfucker!!!"); }, time);
            console.log("!!!");
        }
        
            else{
            console.log("!!!");
        }
      
}

