// assigning variables references to the HTML elements

let taskInput = document.getElementById("taskInfo");
let addButton = document.getElementById("addButton");
let emptyButton = document.getElementById("emptyButton");
let ulNode = document.getElementById("taskList");

// Add event listeners for the buttons
// The addEventListener() method attaches an event handler to an element.
// Add an event listener that calls function(addTask, emptyList) when a user clicks a button

addButton.addEventListener("click", addTask);
emptyButton.addEventListener("click", emptyList);

// addTask function
function addTask() {
  // assigning the value of the input field into a variable (taskText)
  let taskText = taskInput.value;

  // Create a new list item and append it to the list with the textcontent
  let liNode = document.createElement("li");
  let liText = document.createTextNode(taskText);
  liNode.appendChild(liText);
 

  liNode.addEventListener("click", function () {
    liNode.remove();
  });

  ulNode.appendChild(liNode);

  taskInput.value = "";  // input field is cleared
}

// emptyList function
function emptyList() {
  // Remove all list items from the list
  while(ulNode.hasChildNodes()) {
    ulNode.removeChild(ulNode.firstChild);}
}


