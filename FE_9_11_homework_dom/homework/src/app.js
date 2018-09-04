const listArray = [
];

let id = 0;
const one = 1, zero = 0;




let item = document.getElementById('input').value;
document.getElementById('button').disabled = true;
document.getElementById('input').onkeyup = function() {
  btnActive();
}

document.getElementById('button').onclick = () => {
  onAddItemClick();
};



function btnActive() {
  if (!document.getElementById('input').value) {
    document.getElementById('button').disabled = true;
  } else {
    document.getElementById('button').disabled = false;
  }
}



function onAddItemClick() {
  let item = document.getElementById('input').value;

      addToList(item);
      document.getElementById('input').value = '';
      btnActive();

}



function addToList(item) {
  const listLength = listArray.length;
  const MAX_L = 9;

    if (listLength <= MAX_L) {
      listArray.push({
        task: item,
        isChecked: false
      });


        if(listLength===MAX_L){
          document.getElementById('button').disabled = true;
          document.getElementById('input').disabled = true;

          let header=document.getElementById('header');
          let h1 = header.children[zero];
          let p=document.createElement('p');
          let text = document.createTextNode('Maximum item per list are created');
          p.appendChild(text);
          header.insertBefore(p, h1.nextSibling);
        }


  }

  renderList(listArray);
}


function remove(event) {
  const id = +event.target.id;
  listArray.splice(id, one);
  renderList(listArray);
}


function renderList(list) {


  let ulList = document.getElementById('list');

  ulList.innerHTML = '';
  listArray.forEach((x, i) => {
  const divForItem = document.createElement('div');
  const divForCheckbox = document.createElement('div');

  let check = document.createElement('i');

  if (!x.isChecked){
      check.innerHTML = 'crop_square';
  }else{
    check.innerHTML = 'check_box';
  }

  check.classList.add('material-icons', 'check');
  check.id = i;

  check.onclick=function(){
    check.innerHTML = 'check_box';
    x.isChecked = true;
  };

  let label = document.createElement('label')
  label.htmlFor = i;
  label.appendChild(document.createTextNode(x.task));

  divForCheckbox.appendChild(check);
  divForCheckbox.appendChild(label);

  divForItem.appendChild(divForCheckbox);
  divForItem.classList.add('list-item');

  const delet = document.createElement('i');
  delet.innerHTML = 'delete';
  delet.classList.add('material-icons', 'delete');
  delet.id = i;
  delet.addEventListener('click', remove);
  divForItem.appendChild(delet);

  divForItem.setAttribute('draggable', 'true');


  ulList.appendChild(divForItem);
  });
}


let dragging = null;

document.addEventListener('dragstart', function(event) {
		dragging = event.target;
    event.dataTransfer.setData('text/html', dragging);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();

});

document.addEventListener('dragleave', function(event) {
    event.target.style['border-bottom'] = '';
    event.target.style['border-top'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if ( event.target.style['border-bottom'] !== '' ) {
      event.target.style['border-bottom'] = '';
      event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
    } else {
      event.target.style['border-top'] = '';
      event.target.parentNode.insertBefore(dragging, event.target);
    }
});
