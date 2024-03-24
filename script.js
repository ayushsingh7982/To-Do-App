// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Get the task input value
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.innerHTML = taskText;

    // Create a delete button
    var deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "❌";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input
    taskInput.value = "";
}

// Function to add a new task when "Enter" key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
