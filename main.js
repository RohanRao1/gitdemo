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

    // getting description 
    var des = document.getElementById('description').value 

    //create new li element
    var li = document.createElement('li')

    //add class
    li.className = 'list-group-item'

    // add text node with input value
    li.appendChild(document.createTextNode(newitem))
    li.appendChild(document.createTextNode(des))
    
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

// filter items
function filteritems(e){
    // convert to lower case
    var text = e.target.value.toLowerCase()

    //get li's
    var items = itemlist.getElementsByTagName('li')
    // conveet htmlcollection to array
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent
        var des = item.childNodes[1].textContent
        if(itemname.toLowerCase().indexOf(text)!=-1 || des.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
    
}