import { reactive, computed } from "vue"

import defaultData from '@/composables/company/defaultData'
const { default_data } = defaultData()

import employee from '@/composables/employee'
const { hireEmployee } = employee()

import employeeTypes from '@/composables/employee/employeeTypes'
const { employee_types } = employeeTypes()

import officesStore from '@/composables/office'
const { offices, state_office} = officesStore()


const state_company = reactive({
    name: default_data.name,
    employees: [],
    office: offices[state_office.curr_office],
    capitalization: default_data.capitalization,
    balance: default_data.balance,
    clients: default_data.clients,
    share: 100,
    investors_share: 0,
    performed_tasks: {},

    available_employees: computed(() => {
        return state_company.employees.filter(emp => emp.assigned_task == null)
    }),

    changeOffice: function() {
        state_office.show = true
        console.log("Поменять офис")
    },

    filter_roles: function(role) {
        state_company.employees.filter(emp => emp.role == role)
        return state_company.employees.filter(emp => emp.role == role)
    },

    can_hire: function(employee) {
        let taken_positions = this.filter_roles(employee_types[employee].role)
        if(state_company.employees.length == state_company.office.size) {
            return false
        } else {
            if(taken_positions.length < 5) {
                return true
            } else {
                return false
            }
        }
    },

    hire_employee: function(role,start) {
        if(start) {
            this.employees.push(hireEmployee(role))
        } else {
            let verify = confirm("Нанять " + role + "?")
            if(verify) {
                if(this.can_hire(role)) {
                    this.employees.push(hireEmployee(role))
                } else {
                    alert("Слишком много сотрудников этого типа или закончилось место в офисе")
                }
            }
        }
    },


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

    salaries: function() {
        let employeesExpenses = 0
        this.employees.forEach(employee => {
            employeesExpenses+= employee.salary
        })
        return employeesExpenses
    },

    regular_expenses: function() {
        let expenses = this.office_rent() + this.salaries()
        return expenses
    },

    office_rent: function() {
        let officeExpenses = this.office.expenses 
        return officeExpenses
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
        if(this.balance < 0) {
            alert("Вы разорились! Сейчас начнется новая игра")
            location.reload()
        }
    }
})

export default function() {
    return {
        state_company
    }
}
