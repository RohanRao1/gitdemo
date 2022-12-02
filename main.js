var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')

// form submit event 
form.addEventListener('submit',additem)

//delete event 
itemlist.addEventListener('click',removeitem)

// filter event 
filter.addEventListener('keyup',filteritems)

// add item
function additem(e){
    e.preventDefault();

    // get input value
    var newitem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li')

    //add class
    li.className = 'list-group-item'

    // add text node with input value
    li.appendChild(document.createTextNode(newitem))
    
    //create delete button element
    var deletebtn = document.createElement('button')
    // add classes to btn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    // append text node
    deletebtn.appendChild(document.createTextNode('X'))

    //append btn to li
    li.appendChild(deletebtn)

    // append li to list
    itemlist.appendChild(li)
}

// remove item
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}

