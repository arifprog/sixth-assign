let inputBox = document.querySelector ('#inputBox');
let addBtn = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');



addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    if(inputBox.value == ''){
        alert('Please add a new task.');
        return;
    }
    
    let listItem = document.createElement('li');
    listItem.textContent = inputBox.value;
    listItem.className = 'bg-gray-400 w-[250px] md:w-[800px] ml-[5px] md:ml-[260px] my- p- px-8 rounded-xl shadow-md flex py-3 relative pt-3';
    
    taskList.appendChild(listItem);
    inputBox.value = '';

    
    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex space-x-1 md:space-x-2 absolute top-0  ';
    listItem.appendChild(buttonContainer);
    
    
    let editButton = document.createElement('button');
    editButton.textContent = '';
    editButton.className = 'ml-[223px] md:ml-[800px] bg-green-500 hover:bg-lime-600 text-white font-bold w-[15px] md:w-[50px] py-3 rounded-xl shadow-md ';
    buttonContainer.appendChild(editButton);
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    editButton.addEventListener('click', function() {
    listItem.style.color = 'white';
    listItem.style.backgroundColor = 'cadetblue';
    });
    
    
    let doneButton = document.createElement('button');
    doneButton.textContent = '';
    doneButton.className = 'ml-[10px] md:ml-[800px] bg-orange-500 hover:bg-amber-700 text-white font-bold w-[15px] md:w-[50px] py-3 rounded-xl shadow-md ';
    buttonContainer.appendChild(doneButton);
    doneButton.innerHTML = '<i class="fas fa-check"></i>';

    doneButton.addEventListener('click', function() {
    listItem.style.textDecoration = 'line-through';
    listItem.style.textDecorationColor = 'red';
    listItem.style.textDecorationStyle = 'double';
    });
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.className = 'ml-[10px] md:ml-[800px] bg-red-500 hover:bg-rose-700 text-white font-bold w-[15px] md:w-[50px] py-3 rounded-xl shadow-md  ';
    buttonContainer.appendChild(deleteButton);
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';



    editButton.addEventListener('click', function() {
    let newTask = prompt('Edit your task:', listItem.textContent);
    if (newTask !== null && newTask !== '') {
        listItem.textContent = newTask;
        listItem.style.textDecoration = 'none';
        listItem.style.textDecorationColor = 'none';
        listItem.style.textDecorationStyle = 'none';
        listItem.appendChild(buttonContainer); 
    }
});
deleteButton.addEventListener('click', function () {
    
    taskList.removeChild(listItem);
});
    
});
