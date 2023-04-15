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
/* const me42 = async () => await (await fetch("https://dummyjson.com/products/")).json()
document.write(me42())
console.log(me42) */

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

// Get a day name on a date time
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
// Selected based on Array index
var ell = document.getElementsByTagName("a")
ell[1].href = "https://www.google.com"

// Changing style object value
var x = document.getElementById("demo")
x.style.color = "brown"
x.style.width = "100px"
x.style.backgroundColor = "yellow"

// Changing all paragraph background color inside listp
var s = document.getElementsByTagName("p")
for (i = 0; i < s.length; i++) {
    s[i].style.backgroundColor = "lightblue"
}

// Adding tag and content
var p = document.createElement("p")
var node = document.createTextNode("Hello, I'm a new paragraph")
p.append(node) // same as p.appendChild(node)

var div = document.getElementById("listp")
div.append(p) // same as div.appendChild(p)

// Removing tag "span" inside "listp"
var child = document.getElementById("r")
// 1st alternative
// var p2 = document.getElementById("listp")
// p2.removeChild(child)
// 2nd alternative : shorter
child.parentNode.removeChild(child)

// Replacing elements
var p22 = document.createElement("p")
var node22 = document.createTextNode("This is a new node replacement")
p22.appendChild(node22)

var getP = document.getElementById("listp")
var childP = document.getElementById("p4")
getP.replaceChild(p22, childP)

// Animations + style.css with window.onload event handler
window.onload = function () {
    var pos = 0
    var sbox = document.getElementById("small-box")
    var t = setInterval(move,10)

    function move() {
        if(pos > 200 || pos < 0) {
            clearInterval(t);
        }
        if (pos < 200) {
            pos += 1;
            sbox.style.left = pos + "px";
        }
    }
}

// Events Handler
function show() {
    alert("Hi there")
}
// one tag can contain more than one event handler as long as not from same event name
var xy = document.getElementById("bton")
xy.onclick = function () {
    console.log(new Date())
}

// Event Handler on input
var yz = document.getElementById("ipt")
yz.onchange = function () {
    yz.value = yz.value.toUpperCase()
}

// Event Listener, IE8 or lower using document.attachEvent()
var xz = document.getElementById("el")
xz.addEventListener("click",clickFunc)
function clickFunc() {
    console.log("click function from event listener!")
}
xz.addEventListener("mouseover",moverFunc)
function moverFunc() {
    console.log("mouse over function from event listener!")
}

var rel = document.getElementById("rmEL")
rel.addEventListener("click",rmelFunc)
rel.addEventListener("mouseover",moverFunc)
function rmelFunc() {
    xz.removeEventListener("mouseover",moverFunc)
    console.log("mouse over function removed!")
}

// Event Propagation : bubbling (default) & capturing, need more example
rel.addEventListener("mouseover",moverFunc,true) // capturing
xz.addEventListener("mouseover",moverFunc,false) // bubbling

// Slider
var images = [
    "images.png",
    "images1.png",
    "images2.jpeg"
]

var yu = document.getElementById("imgs")
console.log(images.length + " is a number of image in slider")
var num = 0
function next() {
    num++
    if (num >= images.length) {
        num = 0
    }
    yu.src = images[num]
}

function prev() {
    num--
    if (num < 0) {
        num = images.length - 1
    }
    yu.src = images[num]
}

// Form Validation
var ip1 = document.getElementById("ipt1")
var ip2 = document.getElementById("ipt2")
function validate() {
    var r = document.getElementById("result")
    if(ip1.value == "" || ip2.value == "" ) {
        r.innerHTML = "<b style='color: red;'>Please fill the form</b>"
        return false // validation
    } else if (ip1.value !== ip2.value) {
        r.innerHTML = "<b style='color: red'>The text must be same</b>"
        return false // validation
    } else {
        r.innerHTML = "<b style='color: green'>Correct, Thanks!</b>"
        return true // validation
    }
}

// Checking child nodes inside an element
var el6 = document.getElementById("valid")
console.log(el6.hasChildNodes()) // works with getElementById

// local storage & session storage
// set item
/*
localStorage.setItem("person1",JSON.stringify({"id":1,"notes":["Say Hello","Cheers"]}))

const upitem = localStorage.getItem("person1")
const pItem = JSON.parse(upitem)
yuyu.innerHTML = pItem
yuyu.textContent = upitem */

var yuyu = document.getElementById("ls")
localStorage.setItem("person1",JSON.stringify({"id":1,"notes":["Say Hello","Cheers"]}));
const upitem = localStorage.getItem("person1");
let pItem = JSON.parse(upitem);
yuyu.innerHTML = upitem; // innerHTML parsed object, data privacy
console.log(pItem["notes"])

// Know More ES6 : Variable Initialization and Declaration
var a = 10; // not scoped
const b = 'hello'; // not reassignable
let c = true; // scoped

if (true) {
    let name = "Jack" // let will be scoped
}
console.log(name); // empty, alert with no value

// The difference between var & let
var xyz = document.getElementById("es6")
function varTest() {
    var x = 1
    if (true) {
        var x = 2
        console.log("var inside scope: ",x) // 2
    }
    console.log("var outside scope: ",x) // 2
}
function letTest() {
    let x = 1
    if (true) {
        let x = 2
        console.log("let inside scope: ",x) // 2
    }
    console.log("let outside scope: ",x) // 1
}
varTest()
letTest()

// Template Literals in ES6
// 1
let n1 = 'Jim'
let msg1 = 'Welcome ' + n1 + '!'
console.log(msg1)
// 2
let n2 = 'Dud'
let msg2 = `Welcome ${n2}`
console.log(msg2)
// 3
let a3 = 8
let b3 = 34
let msg3 = `The sum is ${a3+b3}`
console.log(msg3)

// loop in ES6
// for loop
console.log("For Loop ES6 arr:")
let arrb = [1,2,3]
for (let k = 0; k < arrb.length; k++) {
    console.log(arr[k])
}
// for...in loop not for Array
console.log("For In Loop ES6 obj:")
let obj3 = {a: 1, b: 2, c: 3}
for (let v in obj3) {
    console.log(v)
}
// for...of (array, Map, Set, WeakMap, and WeakSet)
console.log("For Of Loop ES6 obj:")
let obj4 = ["x","y","z"]
for (const iterator of obj4) {
    console.log(iterator)
}
// example for...of loop
let scores = [68,95,54,84,77,75,63,74,69,80,71,63]
let total = 0
for (let val of scores) {
    if (val >= 70) {
        total++
    }
}
console.log(total)

// Arrow function
// Simple Arrow Function with function name & parameter
const add = (x, y) => {
    let sum = x + y;  
    console.log("Arrow Funct with parameters:",sum);
  }
const greet = x => "Welcome " + x;
console.log("Arrow Func with a parameter: ",greet("Vix"))
// Shorter Arrow Function with function name
const x45 = () => console.log("Hi, I'm an arrow function with name");
x45();
// Shorter Arrow Function with parameter
const arr45 = [2, 3, 7, 8];
console.log("Arrow Func with parameter:")
arr45.forEach(v => console.log(v * 2));

// Default Parameters
const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
console.log("Default Parameter: ",test(5)); //50 

// Object in ES6 contain properties or methods
let height = 5
let health = 100
let physicTest = {
    height,
    health,
    grow() {
        this.height +=2
    }
}
var a25 = {x25: 1, x25: 2, x25: 3, x25: 4};
console.log("Object data ES6: " + physicTest.height + ", " + physicTest.health + ", Latest Duplicate Data: " + a25.x25 + " \'Growing Height\'", physicTest.grow())
console.log("Updated Height: " + physicTest.height)

// Computed Property Names in Object ES6
let prop = "name"
let id = "1234"
let mobile = "08923"

let user = {
    [prop]: "Jack",
    [`user_${id}`]: `${mobile}`
}
console.log(user.name + ", " + user.user_1234)
// Example Computed Property Names with operation
var ii = 0
var a = {
    ['foo' + ++ii]: ii,
    ['foo' + ++ii]: ii,
    ['foo' + ++ii]: ii,
}
console.log(a.foo1 + ", " + a.foo2 + ", " + a.foo3)
// Example Computed Property with transformation
var param = "size"
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}
console.log("mobileSize: ", config.mobileSize)

// Object Assign in ES6
let person111 = {
    name: 'Jim',
    age: 18,
    gender: 'male'
};
let person222 = {
    name: 'Bob',
    age: 20,
    class: 2
}
let newMember = Object.assign({}, person222, person111) // Person111 overrides the properties value & person222 properties will listed first.
console.log(newMember.name + ", " + newMember.age + ", " + newMember.gender + ", " + newMember.class) // Jim, 18, male, 2
for (let mem in newMember) {
    console.log(newMember[mem]) // will print the list of values
    console.log(mem) // will print the list of properties
}

// Mutated Object
let someone = {
    name: "Tom",
    age: 7
}

let newOne = someone // someone values will be updated as reference
newOne.name = "Jerry"
console.log("Reference 1.",someone.name) // Jerry
console.log("Reference 1.",newOne.name) // Jerry
let anotherOne = Object.assign({},someone,{name: "Spike"}) // mutating object to prevent original object as reference
console.log("Mutate 2.",anotherOne.name) // Spike
console.log("Mutate 2.",someone.name,someone.age) // Jerry 7

// Array Destructuring in ES6
let arr244 = ['1','2','3']
let [one, two,three] = arr244
// arr244 destructured into variables
console.log("Variable one: ",one,", Variable two: ",two,", Variable three: ",three)

let a245 = () => {
    return [1,3,2]
}

let [one2, ,two2] = a245()
console.log("2. Variable one: ", one2, a245(), "2. Variable two: ", two2)
// Destructuring simplifies assignment and swapping values
let a11, b11, c11 = 4, d11 = 8; // semicolon is needed to declare an initialization
[a11,b11 = 6] = [2]
[c11,d11] = [d11,c11]
console.log("3. Variable a11: ", a11, "3. Variable b11: ", b11,"3. Variable c11: ", c11,"3. Variable d11:", d11)

// Object Destructuring in ES6
let obj244 = {h112:100, s112: true};
let {h112, s112} = obj244;
// obj244 destructured into variables
console.log("h: ", h112, ", s: ", s112)
// Destructuring simplifies assignme nt and swapping values
let a12,b12
({a12,b12} = {a12: "Hello",b12:"World"})
console.log("a12: ",a12," b12: ",b12)
// Destructuring const object
const obj44 = {one: 1, two: 2}
let {one: first, two: second} = obj44
console.log(one)