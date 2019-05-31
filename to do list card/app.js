// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "";
const UNCHECK = "";

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});


// add to do function

function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    
    
    const item = `<li class="item">
                    
                    <p class="text">${toDo}</p>
                    <i class="fa fa-edit" onclick="document.getElementById('id01').style.display='block'" id="${id} "></i>
                    <button type="button" id="exclemation1" onclick="addingPriority1()">!</button>
    
                    <button type="button" id="exclemation2" onclick="addingPriority2()">!!</button>
    
                    <button type="button" id="exclemation3" onclick="addingPriority3()">!!!</button>

                    <i class="fa fa-trash" job="delete"  id="${id}"></i>
                    
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

//lage popup boksen her
/*
function addEditMeny(toDo, id, done, trash){
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    
    const item = `<div id="id01" class="modal">
  
                    <form class="modal-content animate" action="/action_page.php">

                   
                        <div class="des">Titel <br></div>
                        <div class="text" contenteditable="true">Lage pannekaker</div>
                        <div class="des">Description<br></div>
                        <div class="text" contenteditable="true">Lage pannekaker med bacon og syltetøy</div> 
                        <div class="date">Date <br></div>
                        <input type="date" id="myDate" value="2019-01-27">
                        <div class="des" id="person">Person <br></div>
                        <div class="text" contenteditable="true">Anette Vestvik</div>
           
                        <div class="btn-container" style="background-color:#f1f1f1">
                        <button type="button" class="btn-close" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Close</button>
                        <i id ="trash" class="fa fa-trash"></i>
                
                       </div>
                    </form>
                </div>`;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item); 
}

*/

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});


// complete to do
/*
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
} */


// remove to do 
function removeToDo(element){

    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}


// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
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

