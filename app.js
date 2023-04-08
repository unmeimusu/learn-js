// an object initializer
var person1 = {
    name: "John", age: 31, favColor: "green", height: 183
}
// call object
console.log(person1)
// call property of object
console.log(person1.favColor + " same as " + person1["favColor"])
// length of characters number in a property
document.write(person1.name.length) // document is an object and write() is a method of the document object

// constructor function
function person23(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}
// creating an instance of an object
var p1 = new person23("David", 21);
var p2 = new person23("Monty",22)
p1.changeName("John");
// output to the dom
document.write(p1.name);
document.write(p2.name);
// Method to calculate discount price
function main1() {
    var prodID = 112
    var price = parseInt(165000,10)
    var discount = parseInt(15,10) // Discount 15 need to be divided by 100 

    var prod1 = new Product(prodID, price)
    console.log(prod1.prodID + " price: " + prod1,price)
    
    prod1.changePrice(discount)
    console.log(prod1.prodID + " new price: " + prod1.price)
}

function Product(prodID, price) {
    this.prodID = prodID
    this.price = price

    this.changePrice = function (discount) {
        this.price = this.price - (discount/100 * this.price)
    }
}

main1()

// another constructor function example, function parentheses not necessary to assign function to an object
function person2(name, age) {
    this.name = name
    this.age = age
    this.yearOfBirth = bornYear
}
function bornYear() {
    return 2023 - this.age // 2023 is the current year
}

var prsn = new person2("Ame",18)

console.log(prsn.name+","+prsn.changeName+","+prsn.yearOfBirth())

// be aware with function name and variable name to not have a same name
// another function constructor
function testData(first,second) {
    this.first = first
    this.second = second
    this.checkData = mymethod
}

function mymethod() {
    return "Hello"
}

var td = new testData(1,"one")
console.log(td.checkData())

// example call the method inside an object
function prsn2(name, age) {
    this.name = name
    this.age = age
    this.yearOfBirth = bornYear
}
function bornYear() {
    return 2023 - this.age // 2023 is the current year
}

var p52 = new prsn2("Yuki",26)

document.write("<br>"+ p52.name + "," + p52.age + "," + p52.yearOfBirth())// output to a newline of the DOM

// another example method inside property of an object
function contact(name, number) {
    this.name = name
    this.number = number
    this.print = checkData
}

function checkData() {
    console.log(this.name+": "+this.number)
}

var a1 = new contact("Kaito", 2525)
var b1 = new contact("Conan",5236)
a1.print()
b1.print()

// Array to store multiple variable
var course1 = "HTML"
var course2 = "CSS"
var course3 = "JS"
// shorter using an array
var courses = new Array("HTML","CSS","JS")
console.log(courses)

// Array example 2
var courses2 = new Array("IMBA","JS","CSS")
var course = courses[0] // IMBA
courses[1] = "TS" // second element changed
document.write("<br>"+courses2)
// Array access point
var arr = new Array(3,6,8)
console.log(arr[1])
console.log(arr[5]) // outsute range of an array return "undefined"

// Array change the menu
function main2(newmenu,numlist) {
    var menuList = new Array("Pecel","Pizza","Pancake","Omelet","Bread")
    var index = newmenu // input of a new list replacement
    var number = numlist

    menuList[number] = index
    console.log(menuList)
}

main2("Jengkol",2)

// alternative way creating arrays with fixed index
var courses4 = new Array(3)
courses4[0] = "XML"
courses4[1] = "CS"
courses4[2] = "ASP.NET"

console.log(courses4)
// alternative way creating arrays with dynamic index
var courses5 = new Array()
courses5[0] = "HTML"
courses5[1] = "CSS"
courses5[2] = "JS"
courses5[3] = "IMBA"

console.log(courses5)