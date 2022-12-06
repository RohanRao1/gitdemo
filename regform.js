function savetolocal(event){
    event.preventDefault()
    let name = event.target.username.value
    let email = event.target.mail.value
    let num = event.target.phno.value
    localStorage.setItem('name',name)
    localStorage.setItem('email', email)
    localStorage.setItem('phone number', num)
}


/*var form = document.getElementById('addform')
form.addEventListener('submit',store)

function store(e){
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('mail').value
    var num = document.getElementById('phno').value
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('number',num)
}
*/