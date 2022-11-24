//queryselector 
/*var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px black'

var input = document.querySelector('input')
input.value = 'Hello world'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'SEND'

var item = document.querySelector('.list-group-item')
item.style.color = "red"

var lastitem = document.querySelector('.list-group-item:last-child')
lastitem.style.color = 'blue'

var seconditem = document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.color = '#ccc'
seconditem.style.backgroundColor = 'green'

var thirditem = document.querySelector('.list-group-item:nth-child(3)')
thirditem.style.display = 'none'*/


//query selector all

var titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = "hi"

var odd = document.querySelectorAll('li:nth-child(odd)')
var sec = document.querySelectorAll('li')
sec[1].style.color = 'green'
//var even = document.querySelectorAll('li:nth-child(even)')
odd.textContent = "hello"
for (var i = 0 ; i< odd.length;i++){
    odd[i].style.backgroundColor = 'green'
    //even[i].style.backgroundColor = 'pink'

}











