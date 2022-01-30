import employeeTypes from '@/composables/employee/employeeTypes'
const { employee_types } = employeeTypes()

function generateHash() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9)
}

function hireEmployee(emp) {
    let employee = {
        salary: employee_types[emp].salary,
        tier: employee_types[emp].tier,
        type: employee_types[emp].type,
        role: employee_types[emp].role,
        id: generateHash(),
        assigned_task: "null",
        promotion: employee_types[emp].promotion,
    }
    return employee
}

function promoteEmployee(emp,company) {
    emp.type = emp.promotion.next_type
    emp.tier = emp.promotion.next_tier
    company.balance = company.balance - emp.promotion.cost
    emp.salary = employee_types[emp.type].salary
    emp.promotion = employee_types[emp.type].promotion
}

export default function() {
    return {
        hireEmployee,
        promoteEmployee,
    }
}