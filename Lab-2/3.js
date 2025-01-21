function updateEmployeeDetails(employee, newRole) {
    let updatedEmp = { ...employee, role: newRole };
   return updatedEmp;
}

let employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'INDIA'}
console.log(updateEmployeeDetails(employee, 'Senior Developer'))
