//Add 'enter' key ability
document.getElementById('userInput').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById('addButton').click();
    }
});

const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');
const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const sort = document.getElementById('sort');
const outputContainer = document.getElementById('outputContainer');
let todoArray = [];

addButton.addEventListener('click', function() {
    const removeButton = document.createElement('button');
    const listItemButton = document.createElement('button');
    const listItemDiv = document.createElement('div');
    const listItem = document.createElement('li');
    listItemButton.innerHTML = 'Completed';
    removeButton.innerHTML = 'Remove';
    
    todoArray.push(userInput.value); //create array
    for (i = 0; i < todoArray.length; i++) {
        listItem.innerHTML = todoArray[i];
    }
    
    listItemDiv.appendChild(listItem);
    listItemDiv.appendChild(listItemButton);
    listItemDiv.appendChild(removeButton);
    todoList.appendChild(listItemDiv);

    listItemButton.addEventListener('click', function() {
        if (listItem.classList.toggle('done') === true) {
            completedList.appendChild(listItemDiv); //move to completed
        } else {
            todoList.appendChild(listItemDiv); //move to not completed
        }
    })

    removeButton.addEventListener('click', () => {
        listItemDiv.remove();
        const position = todoArray.indexOf(listItem.innerHTML);
        todoArray.splice(position, 1);
    })

    sort.addEventListener('change', () => {
        const sortValue = document.getElementById("sort");
        
        if (sortValue.options[1].label === 'Ascending') {
            const asc = todoArray.sort((a, b) => a - b);
            console.log(asc);
            //asc.forEach(item => listItem.innerHTML);
        } else {
            const desc = todoArray.sort((a, b) => b - a);
            console.log(desc);
            //des.forEach(item => listItem.innerHTML);
        }
    })
});