const inputboxdata=document.getElementById('input');
const addBtn=document.getElementById('add');
const todoList=document.getElementById('tasklist');
const clearAllBtn=document.getElementById('clearAll');

// Adding New Inputs to the list and button activation.
inputboxdata.onkeyup=() =>{
    let userEnteredTask=inputboxdata.value;
    if(userEnteredTask.trim() != 0){
        // activate the add button if user input are not only spaces.
        addBtn.classList.add("active"); 
    }else{
        // else deactivating the add button
        addBtn.classList.remove("active");

    }
}
// On button click.
addBtn.onclick= ()=>{
    let userEnteredTask=inputboxdata.value;
    let getLocalStorage=localStorage.getItem("New Task");
    if(getLocalStorage==null){
        listArr=[];
    }else{
        // json parse converts json string into js objects for retrieving the stored data on local storage
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userEnteredTask);
    // json stringify converts js objects to json string for storing data to local storage
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTask();
}
// Adding new elements to the task list
function showTask(){
    let getLocalStorage=localStorage.getItem("New Task");
    if(getLocalStorage==null){
        listArr=[];
    }else{
        listArr=JSON.parse(getLocalStorage);
    }
    const pendingNum=document.getElementById('pending');
    // code showing pending number of tasks in the list.
    pendingNum.textContent=listArr.length; 
    let newLiTag='';
    listArr.forEach((element,index)=>{
        newLiTag+=`<div class="item"><li>${element}<span class="delete"  onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li></div>`;
    });
    todoList.innerHTML=newLiTag;
    inputboxdata.value="";
}
// Deleting a particular todo
function deleteTask(index){
    let getLocalStorage=localStorage.getItem("New Task");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Task",JSON.stringify(listArr));
    showTask();
}
// All clear button js code
clearAllBtn.onclick =() =>{
    listArr=[];
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTask();
}