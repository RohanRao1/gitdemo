
function saveToLocal(event){
    event.preventDefault()
    let amount = event.target.expense.value
    let description = event.target.description.value
    let category = event.target.category.value

    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj.amount,JSON.stringify(obj))
    showDetailsOnScreen(obj)
}

window.addEventListener('DOMContentLoaded', () => {
    const localstorageobj = localStorage
    const localstoragekeys = Object.keys(localstorageobj)
    
    for (let i = 0 ; i < localstoragekeys.length ; i++){
        const keys = localstoragekeys[i]
        const detailstring = localstorageobj[keys]
        const detailsObj = JSON.parse(detailstring)
        showDetailsOnScreen(detailsObj)
    }
})

function showDetailsOnScreen(details){
    document.getElementById('num').value = ''
    document.getElementById('desc').value = ''
    document.getElementById('cat').value = ''
    const parent = document.getElementById('userslist')
    const child = `<li id=${details.amount}>${details.amount} - ${details.description} - ${details.category} <button onclick=Edit('${details.amount}','${details.description}','${details.category}')>Edit </button> <button onclick = deleteEntry('${details.amount}')>Delete </button></li>`
    parent.innerHTML += child
}

function Edit(amount,description,category){
    document.getElementById('num').value = amount
    document.getElementById('desc').value = description
    document.getElementById('cat').value = category
    deleteEntry(amount)
}

function deleteEntry(amount){
    localStorage.removeItem(amount)
    removeEntryFromScreen(amount)
}

function removeEntryFromScreen(amount){
    let parentnode = document.getElementById('userslist')
    let childToBeDelted = document.getElementById(amount)
    parentnode.removeChild(childToBeDelted)
}