// Select the input box and the list container
const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item (li) element
        let li = document.createElement("li");
        // Set the innerHTML of the list item to the input box value
        li.innerHTML = inputBox.value;
        // Append the list item to the list container
        listContainer.appendChild(li);
        
        // Create a span element for the delete (×) button
        let span = document.createElement("span");
        // Set the innerHTML of the span to the × symbol
        span.innerHTML = "\u00d7";
        // Append the span to the list item
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = '';
    // Save the updated list to local storage
    saveData();
}

// Event listener to handle marking tasks as completed or deleting them
listContainer.addEventListener("click", function(e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class to mark the task as completed
        e.target.classList.toggle("checked");
        // Save the updated list to local storage
        saveData();
    } 
    // Check if the clicked element is a span (delete button)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent list item of the delete button
        e.target.parentElement.remove();
        // Save the updated list to local storage
        saveData();
    }
}, false);

// Function to save the list data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the tasks stored in local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask to display the stored tasks when the page loads
showTask();
