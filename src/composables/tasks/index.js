import taskList from '@/composables/tasks/taskList'
const { task_list } = taskList()

import employeeTypes from '@/composables/employee/employeeTypes'
const { employee_types } = employeeTypes()

import useCompany from '@/composables/company'
const { state_company } = useCompany()

function getTasks(stage) {
    let tasklist = task_list['stage'+stage]
    for(let task in tasklist) {
        let roles_string = ``
        tasklist[task].required_roles.forEach(role => {
            roles_string = roles_string + employee_types[role]["type"] +`<br/>`
        })
        tasklist[task].roles_string = roles_string
    }
    return tasklist
}

function checkTask(employees, needed_employees) {
    let difference = needed_employees.filter(x => !employees.includes(x))
    if(difference.length) {
        return {
            can_do: false,
            difference: difference
        }
    } else {
        return {
            can_do: true
        }
    }
}

function chooseTask(task, add) {
    if(add) {
        let check_result = checkTask(state_company.has_roles(), task.required_roles) 
        if(check_result.can_do) {
            state_company.performed_tasks[task.code_name] = task
            task.active = true
        } else {
            let desc = "Не хватает специалистов: \n"
            check_result.difference.forEach(role => {
                desc = desc + role + "\n"
            })
            alert(desc)
        }
    } else {
        delete state_company.performed_tasks[task.code_name]
        task.active = false
    }
}

function getPerformedTasks() {
    let tasklist = state_company.performed_tasks
    return tasklist
}

function doTasks() {
    for(let task in state_company.performed_tasks) {
        ++state_company.performed_tasks[task].progress
    }
}

export default function() {
    return {
        getTasks,
        chooseTask,
        getPerformedTasks,
        doTasks,
    }
}