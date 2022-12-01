// TRAVERSING THE DOM

var itemlist = document.querySelector('#items')

// parent node 

//console.log(itemlist.parentNode)
//itemlist.parentNode.style.backgroundColor = '#f4f4f4'
//console.log(itemlist.parentNode.parentNode.parentNode)

//parent element 

// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor = 'red'
// console.log(itemlist.parentElement.parentElement)

//child nodes
//console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor = 'skyblue'

// //First child
//console.log(itemlist.firstChild)
// //first element child
//console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = 'hello 1 '


// last child
//console.log(itemlist.lastChild)
//last element child
//console.log(itemlist.lastElementChild)
//itemlist.lastElementChild.textContent = 'hello 4 '

// next sibling
// console.log(itemlist.nextSibling)
// // next element sibling
// console.log(itemlist.nextElementSibling)

//previous sibling
// console.log(itemlist.previousSibling)
// // previous element 
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color = 'green'

//create element

//create a div
var newdiv = document.createElement('div')

//add class
newdiv.className = 'hello'

//add id
newdiv.id = 'hello1'

//add attribute
newdiv.setAttribute('title','hello div')

//create a text node
var newdivText = document.createTextNode('Hello world')

// add text to div
newdiv.appendChild(newdivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

console.log(newdiv)
newdiv.style.fontSize = '30px'
container.insertBefore(newdiv,h1)




