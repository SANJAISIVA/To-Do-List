document.getElementById("input-id").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addWork();
    }
});

function addWork(){
    let newTask = document.querySelector(".input-cls");
    // console.log(newTask)
    console.log(newTask.value);

    if(newTask.value.trim()){
    let eachList = document.createElement("li");
    // eachList.innerText = newTask.value;
    eachList.className = "each-list";

    let eachListName = document.createElement("span");
    eachListName.innerText = newTask.value;
    eachListName.className = "each-list-name";

    let butContainer = document.createElement("div");
    butContainer.className = "ul-button";

    let completeButton = document.createElement("button");
    completeButton.innerText = "COMPLETE";
    completeButton.className = "task-button-complete";
    
    completeButton.addEventListener("click", function (event) {
        let taskItem = this.closest(".each-list");
        taskItem.classList.toggle("completed-task");
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.className = "task-button-delete";
    
    deleteButton.addEventListener("click", function() {
        let taskItem = this.closest(".each-list");
        taskItem.remove();
    });
    
    butContainer.appendChild(completeButton);
    butContainer.appendChild(deleteButton);
    
    eachList.appendChild(eachListName);
    eachList.appendChild(butContainer);

    let outerList = document.querySelector(".unorder-list");
    outerList.className = "unorder-list";

    outerList.appendChild(eachList);
    }
    else{
        alert("Enter valid task!!");
    }

}