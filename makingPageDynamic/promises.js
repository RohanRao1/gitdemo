const posts = [
    {title: 'Post One ', body : 'This is post one ',createdAt : new Date().getTime()},
    {title: 'Post Two ', body : 'This is post two ',createdAt : new Date().getTime()}
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index) => {
            output += `<li>${post.title} last updated ${(new Date().getTime()- post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push({...post, createdAt : new Date().getTime()})
            const error = false 

            if(!error) { 
                resolve(posts)
            } else {
                reject('Error : something went wrong')
            }
        }, 1000)
    })
}

const user = {
    username : 'Rohan',
    lastActivityTime : '4th of january'
}

function updateLastActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime()/1000
            resolve(user.lastActivityTime)
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (posts.length > 0){
                const lastelement = posts.pop()
                resolve(lastelement)
            } else {
                reject('Array is empty now')
            }
        },1000)
    })
}


//createPost({title : 'Post Three', body : "This is post three"}).then(getPosts)
//.catch((error) => console.log(error))

// createPost({title : 'Post Three', body : "This is post three"})
// .then(() => {
//     getPosts()
//     deletePost().then((deletedelement) => {
//         console.log(deletedelement)
//         getPosts()
//         deletePost().then((deletedelement) => {
//            console.log(deletedelement)
//             getPosts()
//             deletePost().then((deletedelement) => {
//                 console.log(deletedelement)
//                 getPosts()
//                 deletePost().then((deletedelement) => {
//                     console.log(deletedelement)
//                 }).catch((error) => {
//                     console.log(error)
//                 })
//             }).catch(() => {console.log('something went wrong')})
//         }).catch(() => {console.log('something went wrong')})
//     }).catch(() => {console.log('something went wrong')})
// }).catch(() => {console.log('something went wrong')})


// createPost({title : 'Post Three', body : "This is post three"}).then(getPosts).catch(() => {console.log('error found')})
// createPost({title : 'Post Four', body : "This is post four"}).then(() => {
//     getPosts()
//     deletePost().then((element) =>{
//         getPosts()
//         console.log('popped element is ',element)
//     })
// })



// promise.all

// const promise1 = Promise.resolve('hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve,reject) => setTimeout(resolve , 2000, 'goodbye'))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1,promise2,promise3]).then((values) => console.log(values))

function userUpdatesPost(){
     Promise.all([createPost({title : 'Post four', body : "This is post three", createdAt : new Date().getTime() }),updateLastActivityTime()])
    .then(([createPostresolves,updateLastActivityTimeresolves]) => {
        getPosts()
        deletePost()
        console.log(createPostresolves,' last activity on ',updateLastActivityTimeresolves)
    }).catch(error => console.log(error))
}

userUpdatesPost()
