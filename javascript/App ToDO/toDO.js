var listElement = document.querySelector('#app ul');
var inputElement = document.getElementById('inputAddTarefa');
var buttonElement = document.getElementById('btnAddTarefa');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');             
        linkElement.setAttribute('href','#');     

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'excluirToDo('+ pos +')');
        linkElement.appendChild(linkText);          
        
        listElement.appendChild(todoElement);   
        todoElement.appendChild(linkElement);        
    }
}

renderTodos();

function addToDO() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

function excluirToDo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addToDO;