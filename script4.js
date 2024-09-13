// Clock functionality
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);

// Task functionality
function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskList.appendChild(taskItem);

    taskInput.value = '';  // Clear input field after adding
}

// Notes functionality
function saveNote() {
    const noteArea = document.getElementById("noteArea");
    alert('Note saved: ' + noteArea.value);
    noteArea.value = '';  // Clear note area after saving
}

    // Function to format and display the current date
    function updateDate() {
        const dateElement = document.getElementById("date");
        const now = new Date();  // Get current date and time
        
        // Format the date as "Day, Month Date, Year"
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        const dayOfWeek = days[now.getDay()];  // Get the current day of the week
        const month = months[now.getMonth()];  // Get the current month
        const day = String(now.getDate()).padStart(2, '0');  // Get the current day of the month
        const year = now.getFullYear();  // Get the current year
        
        // Display the formatted date
        dateElement.textContent = `${dayOfWeek}, ${month} ${day}, ${year}`;
    }
    
    // Call the updateDate function to display the date
    updateDate();

