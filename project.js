const listt =document.getElementById("list");
const inputbox=document.getElementById("input");
function addTask(){
    if(inputbox.value==''){
      alert("enter some data");}
else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listt.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputbox.value="";
saveTask();
 
}