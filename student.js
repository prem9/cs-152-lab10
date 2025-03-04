// Part 1: Create the Student constructor
function Student(firstName, lastName, studentID) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
}

// Add the display method to Student's prototype
Student.prototype.display = function() {
    console.log(`Name: ${this.firstName} ${this.lastName}, ID: ${this.studentID}`);
};

// Create an array of new students
let students = [
    new Student("Alice", "Johnson", "S12345"),
    new Student("Bob", "Smith", "S67890"),
    new Student("Charlie", "Brown", "S54321")
];

// Add a 'graduated' property to just one student
students[1].graduated = true;

// Part 2: Create another student without using the constructor
let manualStudent = {
    firstName: "David",
    lastName: "Wilson",
    studentID: "S99999"
};

// Set the prototype chain manually
manualStudent.__proto__ = Student.prototype;

// Ensure the display method still works
manualStudent.display(); // Output: Name: David Wilson, ID: S99999

// Test display function for all students
students.forEach(student => student.display());

// Check if the graduated property was added to only one student
console.log(students[1].graduated); // Output: true
console.log(students[0].graduated); // Output: undefined
console.log(students[2].graduated); // Output: undefined
