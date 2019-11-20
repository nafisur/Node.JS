var assignment = require('./assignment')
var employee = require('./emp')


var emp1 = new employee(1, "raj", 23)
console.log("Emp name: " + emp1.e_name)
console.log("Emp id: " + emp1.e_id)
console.log("Emp age: " + emp1.e_age)
console.log("Emp designation: " + emp1.e_designation())
console.log("Emp department: " + emp1.e_dept())


var emp2 = new employee(2, "Pratik", 24)
console.log("Emp name: " + emp2.e_name)
console.log("Emp id: " + emp2.e_id)
console.log("Emp age: " + emp2.e_age)
console.log("Emp designation: " + emp2.e_designation())
console.log("Emp department: " + emp2.e_dept())

var emp3 = new employee(121, "Nilesh", 24)
console.log("Emp name: " + emp3.e_name)
console.log("Emp id: " + emp3.e_id)
console.log("Emp age: " + emp3.e_age)
console.log("Emp designation: " + emp3.e_designation())
console.log("Emp department: " + emp3.e_dept())