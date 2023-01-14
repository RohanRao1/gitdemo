console.log('person 1 shows ticket')
console.log('person 2 shows ticket')

/*const promiseWifeBringingTicket = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket')
    },3000)
})

const getpopcorn = promiseWifeBringingTicket.then( (t) => {
    console.log('wife : i hav the ticket')
    console.log('husband : we should go in ')
    console.log('wife : no i m hungry')
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})

const getButter = getpopcorn.then((t) => {
    console.log(`husband : i got some ${popcorn}`)
    console.log('husband : we should go in ')
    console.log('wife : no i need butter on popcorn')
    return new Promise((resolve,reject) => resolve(`${t} butter`))
})

const getDrinks = getButter.then((t) => {
    console.log('Husband : Shall we go in ?')
    console.log('Wife : No i need a Drink')
    return new Promise((resolve,reject) => resolve(`${t} Drink`))
})

getDrinks.then((t) => console.log(t))*/

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000)
    })

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'))
    const getButter = new Promise((resolve,reject) => resolve('Butter'))
    const getColdDrink = new Promise((resolve,reject) => resolve('Drink'))

    let ticket = await promiseWifeBringingTicket
    console.log(`wife : i hav the ${ticket}`)
    console.log('husband : we should go in ')
    console.log('wife : no i m hungry')

    let popcorn = await getPopcorn
    console.log(`husband : i got some ${popcorn}`)
    console.log('husband : we should go in ')
    console.log('wife : no i need butter on popcorn')

    let butter = await getButter
    console.log(`husband : i got some ${butter}`)
    console.log('husband : we should go in ')
    console.log('wife : no i need cold drink')

    let drink = await getColdDrink
    console.log(`husband : Here is your ${drink}`)
    console.log('husband : Shall we go in ? ') 
    console.log('Wife : Yes dea')   

     
    return ticket
}

preMovie().then((m) => console.log(`Person 3 shows ${m}`))

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')

const posts = [
    {title: 'Post One ', body : 'This is post one ',createdAt : new Date().getTime()},
    {title: 'Post Two ', body : 'This is post two ',createdAt : new Date().getTime()}
]

async function callposts() {
    const getposts = () =>{
        setTimeout(() => {
            let output = ''
        posts.forEach((post) =>{
            output += `<li> ${post.title} last updated ${(new Date().getTime()- post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output
        },3000)
    }

    const createpost = (post) => {
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

    const deletepost = () => {
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

    let createdposts = await createpost
    createdposts({title: 'Post three ', body : 'This is post three ',createdAt : new Date().getTime()})
    getposts()

    let postsdeleted = await deletepost
    postsdeleted().then(a => console.log(a))
    getposts()

}

callposts()