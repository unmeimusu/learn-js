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
console.log(courses5.length) // length return the number of array's property as an object
courses6 = courses4.concat(courses5) // combining arrays to join and create an entirely new array 
console.log(courses6) 

// 
function main45() {
    // take the number of passed levels
    // var levels = parseInt(readline(),10) /* to convert inputted string to number
    var levels = 5
    var points = new Array();
    
    var count = 0;
    while(count<levels){
        var elem = [4,5,6,7,4]; // in total must be 26
        points[count] = elem[count];
        count++;
    }
    
    var sum = 0, count = 0; // must reset count because it changed after first while-loop
    // calculate the sum of points 
    while(count<levels){
        var sum = sum + points[count];
        count++;
    }
/* Alternative without resetting count is using for loop
   for (i = 0; i < levels; i++) {
        sum = sum + points[i]
    }*/
    // output
    console.log(sum);
}

main45()

// JS doesn't support Associative Arrays, but can use the named array syntax which will produce an object

var person = [];
person["name"] = "John";
person["age"] = 46;
document.write("<br>" + person["age"]);

// Math object with several properties
document.write("<br>pi: " + Math.PI + "<br>e: " + Math.E + "<br>ln2: " + Math.LN2 + "<br>ln10: " + Math.LN10 + "<br>Log2e: " + Math.LOG2E + "<br>Log10e: " + Math.LOG10E)

// Math object with several methods
document.write("<br>abs(x): "+Math.abs(-19)+"<br>sqrt(x): "+Math.sqrt(9)) // more methods not explained here
// example Math round (to round down) and ceil (to round up)
function main() {
    var year = 2023
    document.write("<br>Century: " + calcCentury(year))
}

function calcCentury(input) {
    return Math.ceil(input/100)
}

main()
// prompt to ask an input number, and then sent it to alert
// var n = prompt("Enter a number", "")
var n = 9
var answer = Math.sqrt(n)
console.log("The square root of " + n + " is " + answer)
// async example not yet
const me42 = async () => await (await fetch("https://dummyjson.com/products")).json()
document.write(me42())
console.log(me42)

function myIntervalLogging() {
    console.log("Hi")
}
// setInterval(myAlert,3000) // call the function every 3 seconds

// print current time in hours, minutes, and seconds
function printTime() {
    var d = new Date()
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementsByTagName("p").innerHTML = hours+": "+mins+": "+secs;
}
setInterval(printTime,1000) // reload every 1 second

// 
function main12() {
    var year = parseInt(2023,10)
    var month = parseInt(11,10)
    var day = parseInt(5,10)

    console.log(getWeekDay(year, month, day))
}

function getWeekDay(year, month, day) {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var d = new Date(year, month, day)

    return names[d.getDay()]
}

main12()

// DOM to Array, place the app.js script inside the parent of selected tag id "listp"
const el12 = document.getElementById("listp")
document.getElementById("print1").textContent = el12.firstElementChild.textContent + ", is the first child of listp <br><br>"
document.getElementById("print2").innerHTML = el12.children[1].innerHTML + ", is the second child of listp <br><br>"
document.getElementById("print3").textContent = el12.lastElementChild.innerHTML + ", is the last child of listp <br><br>"

// Changing attributes elements
var el = document.getElementById("myimg")
el.src = "./images.png"