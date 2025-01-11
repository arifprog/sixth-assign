let inputBox = document.querySelector ('#inputBox');
let addBtn = document.querySelector('#addBtn');
let listbox = document.querySelector('p');

addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    if(inputBox.value == ''){
        alert('Please add a new task.');
        return;
    }

    let option = new Option(inputBox.value,inputBox.value);
    
    let task = listbox.appendChild(option);
    inputBox.value = '';

})