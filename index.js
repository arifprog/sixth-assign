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
    listItem.className = 'bg-gray-400 w-[300px] md:w-[900px] ml-10 px-4 py-2 rounded ';
    
    taskList.appendChild(listItem);
    inputBox.value = '';
})
