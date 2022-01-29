import { reactive } from "vue"

import defaultData from '@/composables/company/defaultData'
const { default_data } = defaultData()

const state_company = reactive({
    name: default_data.name,
    employees: default_data.employees,
    office: default_data.office,
    capitalization: default_data.capitalization,
    balance: default_data.balance,
    clients: default_data.clients,
    performed_tasks: {},

    has_roles: function() {
        let roles = []
        for(let employee in this.employees) {
            roles.push(this.employees[employee].type)
        }
        return roles
    },

    income: function() {
        let income = default_data.productCost * this.clients
        return income
    },

    regular_expenses: function() {
        let officeExpenses = this.office.expenses 

        let employeesExpenses = 0
        this.employees.forEach(employee => {
            employeesExpenses+= employee.salary
        })

        let expenses = officeExpenses + employeesExpenses

        return expenses
    },

    task_expenses: function() {
        let tasklist = this.performed_tasks
        let expenses = 0
        for(let task in tasklist) {
            expenses += tasklist[task].additional_expenses
        }
        return expenses
    },

    expenses: function() {
        let expenses = this.regular_expenses() + this.task_expenses()
        return expenses
    },

    next_balance: function() {
        let balance = this.balance
        balance += this.income()
        balance -= this.expenses()
        this.balance = balance
    }
})

export default function() {
    return {
        state_company
    }
}
