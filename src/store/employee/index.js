import employeeTypes from '@/store/employee/employeeTypes'
const { employee_types } = employeeTypes()

function hireEmployee(emp) {
    let employee = {
        salary: employee_types[emp].salary,
        tier: employee_types[emp].tier,
        type: employee_types[emp].type,
    }
    return employee
}

export default function() {
    return {
        hireEmployee
    }
}