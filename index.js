let inputBox = document.querySelector ('#inputBox');
let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(inputBox.value == ''){
        alert('Please add a new task.');
        return;
    }
})