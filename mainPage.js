document.addEventListener('DOMContentLoaded', function() {
    let nameElement = document.querySelector("#nameElement");
    let urlParams = new URLSearchParams(window.location.search);
    let name = urlParams.get('name');

    if (name) {
        nameElement.innerText = decodeURIComponent(name);
    } else {
        nameElement.innerText = "Guest"; // Default if no name is provided
    }

    // Initialize task counter
    let taskCounter = 0;

    // Function to add a new task
    function addTask(taskDescription) {
        // Create task element
        let taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        
        // Task description text
        let taskText = document.createElement('span');
        taskText.textContent = taskDescription;
        taskItem.appendChild(taskText);
        
        // Delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Done';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            taskItem.remove(); // Remove task item when delete button is clicked
            taskCounter--; // Decrease task count
            updateTaskCount(); // Update task count display
        });
        taskItem.appendChild(deleteButton);
        
        // Append task item to task list
        let taskList = document.getElementById('taskList');
        taskList.appendChild(taskItem);

        // Increment task counter
        taskCounter++;
        updateTaskCount(); // Update task count display
    }

    // Function to update task count display
    function updateTaskCount() {
        let taskNoElement = document.getElementById('taskNo');
        taskNoElement.textContent = taskCounter;
    }

    // Form submission event listener
    let taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get task input value
        let taskInput = document.getElementById('taskInput');
        let taskDescription = taskInput.value.trim();

        if (taskDescription) {
            addTask(taskDescription); // Add task to list
            taskInput.value = ''; // Clear input field after adding task
        } else {
            alert('Please enter a task description');
        }
    });

    // Add event listener for back icon to go back to index.html
    let backIcon = document.querySelector("#back-icon");
    backIcon.addEventListener("click", function() {
        window.location.href = 'index.html';
    });
});
