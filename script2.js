//Add 'enter' key ability
document.getElementById('userInput').addEventListener('keyup', function (event) {
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

addButton.addEventListener('click', function () {
    const removeButton = document.createElement('button');
    const listItemButton = document.createElement('button');
    const listItemDiv = document.createElement('div');
    let listItem = document.createElement('li');
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

    listItemButton.addEventListener('click', function () {
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
});
// Your sort event listener is inside your add event listener. Let's remove it to the outside because it is independant of the items. 
// You want to create the sort event listener only once and not each time the add button gets hit. - done
sort.addEventListener('change', () => {
    const sortValue = document.getElementById("sort");
    if (sortValue.options[sortValue.selectedIndex].text == 'Ascending') {
        // You want to remove the todo list (ul) instead of the item as this will only remove the text not the buttons
        // And you want to so the same in descending as well - done
        listItem = document.getElementById('todoList');
        listItem.remove();
        asc = todoArray.sort();
        
        for (let i = 0; i < asc.length; i++) {
            // 'asc' is a variable that has your sorted array. It's not a component so you won't be able to do any DOM manipulation to it. 
            // You have deleted the ul at this point so you will need to recreate everything - see line 18 where you create those elements. 
            // You'll also need to recreate the ul which we created in the html because we just deleted it above. Then append everything to the ul
            // So at this point you may have noticed that you are basically writing the same code several times i.e. creating those elements in the add 
            //event listener, in sort ascending and sort descending. You want to create a function that does that and just call the function each time. 
            // ** Hint: In the function, you'll be passing in an array as that is the only thing that changes each time you create the elements. 
            
            let sortedTodoList = (asc) => {
                asc[i].innerHTML = listItem;
                listItemDiv = document.getElementById('outputContainer');
                listItemDiv.appendChild(listItem);
            }
            sortedTodoList(asc);
        }


    } else if (sortValue.options[sortValue.selectedIndex].text == 'Descending') {
        
        listItem = document.getElementById('todoList');
        listItem.remove();
        desc = todoArray.sort().reverse();

        for (let i = 0; i < desc.length; i++) {
            let sortedTodoList = (desc) => {
                desc[i].innerHTML = listItem;
                listItemDiv = document.getElementById('outputContainer');
                listItemDiv.appendChild(listItem);
            }
            sortedTodoList(desc);
        }
    }

    /*
    if (sortValue.options[1].label == 'Ascending') {
        const asc = todoArray.sort((a, b) => a - b);
        console.log(asc);
        //asc.forEach(item => listItem.innerHTML);
    } else {
        const desc = todoArray.sort((a, b) => b - a);
        console.log(desc);
        //desc.forEach(item => listItem.innerHTML);
    }*/
});