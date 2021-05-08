const todoList = document.getElementById('todoList');
const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const outputContainer = document.getElementById('outputContainer');
addButton.addEventListener('click', function() {
    const removeButton = document.createElement('button');
    const listItemButton = document.createElement('button');
    const listItemDiv = document.createElement('div');
    const listItem = document.createElement('li');
    listItem.innerHTML = userInput.value;
    listItemButton.innerHTML = 'Completed';
    removeButton.innerHTML = 'Remove';
    listItemDiv.appendChild(listItem);
    listItemDiv.appendChild(listItemButton);
    listItemDiv.appendChild(removeButton);
    todoList.appendChild(listItemDiv);
    listItemButton.addEventListener('click', function() {
        listItem.classList.toggle('done');
    })
    removeButton.addEventListener('click', () => {
        listItemDiv.remove();
    })
});