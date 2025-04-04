function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `a
        <span onclick="toggleTask(this)" class="flex-grow-1">${taskText}</span>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Supprimer</button>
    `;
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("task-completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
