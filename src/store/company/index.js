import { reactive } from "vue";

import defaultData from '@/store/company/defaultData'
const { default_data } = defaultData()

const state_company = reactive({
    name: default_data.name,
    employees: default_data.employees,
    office: default_data.office,
    capitalization: default_data.capitalization,
    balance: default_data.balance,
    clients: default_data.clients,

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
})

export default function() {
    return {
        state_company
    }
}
