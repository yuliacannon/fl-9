const rootNode = document.getElementById('root');


const todoItems = [//{
  //isDone: false,
  //id: 12345,
  //description: 'Todo 1'}
];

const htmlConst = {

  main() {
    const divCont = document.createElement('div');
    divCont.setAttribute('class','main-wrapper');
    const h1 = document.createElement('h1');
    divCont.appendChild(h1);
    h1.innerHTML ='Simple TODO Aplication';
    const addButton = document.createElement('button');
    addButton.innerHTML = 'Add new task';
    divCont.appendChild(addButton);
    const taskList = document.createElement('div');
    taskList.setAttribute('class', 'task-list');
    divCont.appendChild(taskList);

    addButton.addEventListener('click', openAddPage);

    if(todoItems.length){
      let objects = JSON.parse(localStorage.getItem('todoItems'));
      for(let item in todoItems){
        if (Object.prototype.hasOwnProperty.call(todoItems, item)){
          const li = document.createElement('div');
          const checkBox = document.createElement('button');
          checkBox.setAttribute('class', objects[item].isdone ? 'checkbox-done' : 'checkbox-undone');
          const todo = document.createElement('img');
          todo.setAttribute('src', './assets/img/todo-s.png');
          checkBox.appendChild(todo);
          li.setAttribute('class', 'list-item');
          li.innerHTML= objects[item].description;
          taskList.appendChild(li);
        }


      }
    }else{
      taskList.innerHTML = 'TODO is empty';
    }

    return divCont;
  },

  add(){

    const divCont = document.createElement('div');
    divCont.setAttribute('class','main-wrapper');
    const h1 = document.createElement('h1');
    divCont.appendChild(h1);
    h1.innerHTML ='Add task';
    const input = document.createElement('input');
    divCont.appendChild(input);
    const canselBtn = document.createElement('button');
    const saveBtn = document.createElement('button');
    saveBtn.addEventListener('click', addNewTask);
    divCont.appendChild(canselBtn);
    canselBtn.innerHTML = 'Cansel';
    saveBtn.innerHTML = 'Save changes';
    divCont.appendChild(saveBtn);

    return divCont;

  }/*,

  modify(){

  }*/

};


function openAddPage(event){
  window.location.hash = '/add';
  onLoad();
}

function renderList(list){
  let len = list.length;
  let taskList = document.getElementById('list');

}

function onLoad(){
  let hash = window.location.hash;

  if(hash.endsWith('/add')){

    rootNode.innerHTML = '';
    rootNode.appendChild(htmlConst.add());

  }else{

    rootNode.innerHTML = '';
    rootNode.appendChild(htmlConst.main());

  }

  /*else if(hash.endsWith('/modify/*' )){

    rootNode.innerHTML = '';
    rootNode.appendChild(htmlConst.modify());

  }*/
}


function addNewTask(event){
  let newTask = document.querySelector('input').value;
  addToList(newTask);
}

function loadMainPage(){
  let h1 = document.querySelector(h1);
  h1.appendChild(document.createTextNode('Add task'));
}

function addToList(item){
  todoItems.push(
    {
      isdone: false,
      id: todoItems.length + 1,
      description: item
    }
  );

  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  window.location.hash = '/main';
  onLoad();
}

onLoad();
//rootNode.appendChild(htmlConst.main());
