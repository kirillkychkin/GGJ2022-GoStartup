import employeeTypes from '@/composables/employee/employeeTypes'
const { employee_types } = employeeTypes()

function hireEmployee(emp) {
    let employee = {
        salary: employee_types[emp].salary,
        tier: employee_types[emp].tier,
        type: employee_types[emp].type,
        role: employee_types[emp].role,
        assigned_task: null
    }
    return employee
}

export default function() {
    return {
        hireEmployee
    }
}