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

function chooseTask(task, add) {
    if(add) {
        state_company.performed_tasks[task.code_name] = task
        task.active = true
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