
//get the keys and displays and set variables to them
var keys = document.querySelectorAll("button");
var actions = document.querySelectorAll("button[data-action]");
var display = document.getElementById("display");
var answer=document.getElementById('answer');

//function to display number when key is pressed
keys.forEach(key => key.addEventListener('click',function(e){

    //when del key is pressed, clear the display screen
    
if(key.innerText=="DEL"){
    display.value="";
}else if(e.target.dataset["action"]){
    display.value+= e.target.dataset.action;
 
}
else if(e.target.dataset["value"]){
    display.value+= e.target.dataset.value;
}
else{
        answer.innerText=""
   answer.innerText= eval(display.value);
}
    

}));

//returning the calculation when the equal sign in clicked
// var equals=document.getElementById("equalsign");
// equals.addEventListener('click',function(e){
//     answer.innerText=""
//     answer.innerText= eval(display.value);
// })