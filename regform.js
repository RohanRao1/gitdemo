function savetolocal(event){
    event.preventDefault()
    let name = event.target.username.value
    let email = event.target.mail.value
    let num = event.target.phno.value
    localStorage.setItem('name',name)
    localStorage.setItem('email', email)
    localStorage.setItem('phone number', num)
}
