// estudo de classes
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//Exemplo extendendo a classe List
class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

    //aqui da erro no push pq quando algo é declarado como STATIC ele não enxerga o resto da classe ou seja
    //nesse exemplo ele não acha a variavel PUSh que vem da classe LIST
    static ExcluiToDo() {
        this.data.push('novo todo');
        console.log('static')
    }
}

const MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

// exemplo STATIC que da erro TodoList.ExcluiToDo();