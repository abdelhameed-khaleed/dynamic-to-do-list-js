document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements:
    const addButton= document.getElementById("add-task-btn");
    const taskList= document.getElementById("task-list");
    const taskInput= document.getElementById("task-input");

    // Create the addTask Function:
    

    function addTask () {
        let taskText = taskInput.value.trim();
        if(taskText === ""){
            alert("Please Enter the task");
            return ;
        }
        // Task Creation and Removal:
        let li = document.createElement("li")
        li.textContent = taskText;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick= function (){
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value ="";
     
        

    }
    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',(event)=>{
        if (event.key==="Enter"){
            addTask();
        }
    })

});