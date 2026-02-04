// type and interface are very close has following differences
// '=' sign in type not required interface
// interface can implement class but type cannot
// type allow union and intersection
// interface
interface Person{
    name:string
    age:number
    greet(phrase:string):void
}

class Employee implements Person{
    name:string
    age:number

    constructor(n:string,a:number){
        this.name = n
        this.age = a
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}

const e = new Employee("atul",22)
console.log(e.name)

// type
type user = {
    firstname: string,
    lastname:string,
    age:number
}

type strinornumber = string | number // union
function printId(id:strinornumber){
    console.log(id)
}

// allow intersection
type Employer = {
    name:string
    startdate:Date
}

type Manager = {
    name:string
    department: string
}

type Teamlead = Employer & Manager
const teamlead:Teamlead = {
    name:"atul",
    startdate:new Date(),
    department:"aaa"
}

// can do union and intersection of interface and type
interface Managering{name:string}
type man = {n:number}
type manaman = Managering & man

// array in ts []
type NumberArr = number[]
function maxvalue(arr:NumberArr){

}

// enums
// allows you to define a set of named constants (i.e to create a human -readable way to represent a set of constand values)

type direction = "up" | "down" | "left" | "right" // a way to do

// right way to do
enum Direction {
    Up,
    Down,
    left,
    right
}

enum Tirection {
    Up = "up",
    Down = "down",
    left = "left",
    right = "right"
}

function dosomething(keypressed:Direction){
    if(keypressed == Direction.left){
        // do something
    }
}

// generics
// problem
// type Input = number | string

// function firstElement(arr:Input[]){
//     return arr[0]
// }

// const value = firstElement(["hello","world"])
// const value = firstElement(["hello",1])
// console.log(value.toUpperCase())

function identity<T>(arg:T):T{
    return arg
}

const ot = identity<string>("hello")
const ot1 = identity<number>(1)

function firstElement<B>(arr:B[]):B{
    return arr[0]
}

interface User {
    name:string
}

const value = firstElement<string>(["hello","world"])
const el = firstElement<User>([{name:"hello"}])
const value1 = firstElement<string|number>(["hello",1])
console.log(value.toUpperCase())