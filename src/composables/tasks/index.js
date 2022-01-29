import taskList from '@/composables/tasks/taskList'
const { task_list } = taskList()

import employeeTypes from '@/composables/employee/employeeTypes'
const { employee_types } = employeeTypes()

function getTasks(stage) {
    let tasklist = task_list['stage'+stage]
    console.log(tasklist)
    for(let task in tasklist) {
        let roles_string = ``
        tasklist[task].required_roles.forEach(role => {
            roles_string = roles_string + employee_types[role]["type"] +`<br/>`
        })
        tasklist[task].roles_string = roles_string
    }
    return tasklist
}

export default function() {
    return {
        getTasks
    }
}