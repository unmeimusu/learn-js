// an object
var person1 = {
    name: "John", age: 31, favColor: "green", height: 183
}
// call object
console.log(person1)
// call property of object
console.log(person1.favColor + " same as " + person1["favColor"])
// length of characters number in a property
document.write(person1.name.length) // document is an object and write() is a method of the document object


function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);