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
    listItem.className = 'bg-gray-400 w-[800px] mx-auto my- p- px-8 rounded shadow-md flex h-[50px] relative';
    
    taskList.appendChild(listItem);
    inputBox.value = '';

    
    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex space-x-2 absolute top-0';
    listItem.appendChild(buttonContainer);
    

    let editButton = document.createElement('button');
    editButton.textContent = '';
    editButton.className = 'ml-[900px] bg-green-500 hover:bg-pink-700 text-white font-bold w-[150px] py-3 rounded  ';
    buttonContainer.appendChild(editButton);
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.className = 'ml-[900px] bg-red-500 hover:bg-pink-700 text-white font-bold w-[150px] py-3 rounded  ';
    buttonContainer.appendChild(deleteButton);
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    


    editButton.addEventListener('click', function() {
    let newTask = prompt('Edit your task:', listItem.textContent);
    if (newTask !== null && newTask !== '') {
        listItem.textContent = newTask;
        listItem.appendChild(buttonContainer); 
    }
});
deleteButton.addEventListener('click', function () {
    
    taskList.removeChild(listItem);
});
    
})
