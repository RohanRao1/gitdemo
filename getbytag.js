// Get elements by tag name
var items = document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent = "Good Boy"
for (var j=0;j<items.length;j++){
    items[j].style.backgroundColor = "grey"
}
var li = document.getElementsByTagName('li')
//console.log(li)
//console.log(items)
li[0].textContent = 'HI'
li[0].style.fontWeight= "bold"
li[0].style.color = "blue"
li[0].style.backgroundColor = "yellow"

for (var i =0;i < li.length; i++){
    li[i].style.border = "5px solid pink"
}

// Query
