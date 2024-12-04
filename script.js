const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<img src="./assets/delete.png">`;
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
        saveData();
    } 
}, false);

function clearTask() {
    listContainer.innerHTML = '';
    saveData();
}

inputBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

document.querySelector('.btnAdd').addEventListener('click', addTask);
document.querySelector('.btnClear').addEventListener('click', clearTask);

showTask();