
//get the keys and displays and set variables to them
var keys = document.querySelectorAll("button");
var actions = document.querySelectorAll("button[data-action]");
var display = document.getElementById("display");

//function to display number when key is pressed
keys.forEach(key => key.addEventListener('click',function(e){

    //when del key is pressed, clear the display screen
    
if(key.innerText=="DEL"){
    display.value="";
}else{
    //console.log(e.target.dataset.action);
    display.value+= key.innerText;
}
    

}))