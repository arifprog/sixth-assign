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
    listItem.className = 'bg-gray-400 w-[300px] md:w-[900px] ml-20 px-8 py- rounded  ';
    
    taskList.appendChild(listItem);
    inputBox.value = '';

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'ml-[900px] bg-green-500 hover:bg-pink-700 text-white font-bold w-[150px] py-3 rounded ';
    listItem.appendChild(editButton);
    editButton.style.paddingTop = '12px';
    

    editButton.addEventListener('click', function() {
    let newTask = prompt('Edit your task:', listItem.textContent);
    if (newTask !== null && newTask !== '') {
        listItem.textContent = newTask;
        listItem.appendChild(editButton); 
    }
});

    
})
