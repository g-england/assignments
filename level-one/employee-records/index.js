const employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log(this)
}

var bob = new Employee("Bob", "CEO", "$100,000");
bob.printEmployeeForm()

var jack = new Employee("Jack", "COO", "100,000")
jack.printEmployeeForm()

var gesi = new Employee("Gesi", "Sales Rep", "25/hr")
gesi.status = "Part Time"
gesi.printEmployeeForm()

employees.push(bob, jack, gesi)
console.log(employees)
