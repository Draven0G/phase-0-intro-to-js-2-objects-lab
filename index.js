// Write your solution in this file!

// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to update employee with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key-value pair from employee (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log("Initial employee object:", employee);

// Test updateEmployeeWithKeyAndValue()
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
console.log("Updated employee (non-destructive):", updatedEmployee);

// Test destructivelyUpdateEmployeeWithKeyAndValue()
destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "HR");
console.log("Employee after destructive update:", employee);

// Test deleteFromEmployeeByKey()
const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without street address (non-destructive):", employeeWithoutStreetAddress);

// Test destructivelyDeleteFromEmployeeByKey()
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee after destructive deletion:", employee);
