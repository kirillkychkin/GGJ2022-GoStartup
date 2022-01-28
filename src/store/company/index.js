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

    expenses: function() {
        let expenses = 200 + this.office.expenses + this.employees[0].salary
        return {
            expenses
        }
    },
})

export default function() {
    return {
        state_company
    }
}
