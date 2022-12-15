var obj = {num :2};
var obj2 = {num : 5};

var addToThis = function(a,b,c){
    return this.num+a+b+c
};

// CALL
console.log(addToThis.call(obj,1,2,3));   // functionname.call(obj, functionargument )


// APPLY
var arr = [1,2,3]
console.log(addToThis.apply(obj,arr))
console.log(addToThis.apply(obj2,arr))

//BIND 
var bound = addToThis.bind(obj)
//console.log(bound())
console.log(bound(1,2,3))

// Deliverable 4th answer
var Student = {age : 20 };

var age = function(){
    return this.age
}

var studentAge = age.bind(Student)
console.log(studentAge()) 



// CURRY using bind

let multiply = function(a,b){
    console.log(a*b)
}


let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this,3)
multiplyByThree(5)


//CURRY USING CLOSURE

let Multiply = function(x){
    return function(y) {
        console.log(x*y)
    }
}

let MultiplyByTwo = multiply(2)
multiplyByTwo(3)


