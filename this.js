
'use strict';

this.table = 'window table'

const cleanTable = function(soap) {
         console.log(`cleaning ${this.table} using ${soap}`)
 }


this.garage = {
    table : 'garage table'
}

let RohanRoom = {
     table : "Rohan table"
 }

let ramRoom = {
    table : 'Ram table'
}

cleanTable.call(this,'lux')
cleanTable.call(garage,'lux')
cleanTable.call(RohanRoom,'pears')


console.log('!!! below using constructor !!!')



// using constructor 

let createRoom = function(name){      //constructor function
    this.table = `${name}s table`     
}

createRoom.prototype.cleanTable = function(soap){         
    console.log(`cleaning ${this.table} using ${soap}`)
}

const johnsRoom = new createRoom('john')
const jillsRoom = new createRoom('jill')

jillsRoom.cleanTable('medimix')
johnsRoom.cleanTable('some')


console.log('!!! below using class !!!')


// using class
class createroom {
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}
const boss = new createroom('boss')
boss.cleanTable('dettol')



// Deliverables 

class Student {
    static strength = 0
    constructor(name,age,phno,marks){
        this.name = name
        this.age = age
        this.phno = phno
        this.marks = marks
        Student.strength += 1
    }
    static total(){
        console.log(Student.strength)
    }
    details (){
        console.log(`student name : ${this.name}\nage : ${this.age}\nphone number : ${this.phno}\nmarks : ${this.marks}`)
    }
    Eligibility(){
        if (this.marks>40){
            console.log(`${this.name} is eligible`)
        }
        else {
            console.log(`${this.name} is not eligible`)
        }
    }
    setPlacementAge(minPlacementAge){
        return  (minMarks) => {
            console.log(this)
            if (this.marks > minMarks && this.age >minPlacementAge){
                console.log(this.name +' is ready for placements')
            }
            else {
                console.log(this.name +' is not ready for placements')
            }
        }
    }
}

const s1 = new Student('Rohan',22,9071885954,80)
const s2 = new Student('Reddy',23,1234568978,70)
const s3 = new Student('Vishwas',24,7895461235,30)
const s4 = new Student('Ganesh',25,1002003004,35)
const s5 = new Student('Sanjay',26,7889554225,60)
Student.total()

s1.setPlacementAge(18)(40)
