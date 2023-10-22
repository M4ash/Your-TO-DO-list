var typed = new Typed('.blink', {
      strings: ['Hola!', 'Feel Free &amp; add a task.'],
      typeSpeed: 50,
      loop: false,
    });

var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

//remove all button
removeAll = function(){
     document.getElementById('list').innerHTML = '';
}

//adding a new list element
add.onclick = function(){
    addlist(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}


//function construction...
function addlist(UL){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText+' ');
    var removeButton = document.createElement('button');
    
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = "&times;";
        removeButton.setAttribute('onclick','removeMe(this)');
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        UL.appendChild(li);
        }
     else{
         alert("Please enter a todo");
     }
    
}
    
function removeMe(item) {
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}
    
    
