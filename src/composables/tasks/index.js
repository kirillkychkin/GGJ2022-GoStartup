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

function checkTasks() {
    let valid = true
    for(let task in state_company.performed_tasks) {
        let curr_task = state_company.performed_tasks[task]
        curr_task.required_roles.forEach(role => {
            let emp = curr_task.assigned_employees[role]
            if(emp == "null") {
                valid = false
            } else {
                console.log(emp)
                let tier = parseInt(role.substring(role.length-1))
                if (tier > emp.tier) {
                    valid = false
                }
            }
        })
        if(valid) {
            curr_task.is_performed = true
        } else {
            curr_task.is_performed = false
        }
    }
    return valid
    /*
    let employees = [...employeesOrig]
    let required_roles = []
    needed_employees.forEach(emp => {
        let role = emp.substring(0, emp.length-1)
        let tier = parseInt(emp.substring(emp.length-1))
        required_roles.push({
            role: role,
            tier: tier,
        })
    })
    needed_employees = required_roles
    
    firstLoop:
    for(let i = 0; i < needed_employees.length; ++i) {
        for(let j = 0; j < employees.length; ++j) {
            if(needed_employees[i].role == employees[j].role && needed_employees[i].tier == employees[j].tier) {
                employees.splice(j,1)
                let index = required_roles.indexOf(needed_employees[i])
                required_roles.splice(index,1)
                --i
                continue firstLoop
            }
        }
    }

    secLoop:
    for(let i = 0; i < needed_employees.length; ++i) {
        for(let j = 0; j < employees.length; ++j) {
            if(needed_employees[i].role == employees[j].role && needed_employees[i].tier <= employees[j].tier) {
                employees.splice(j,1)
                let index = required_roles.indexOf(needed_employees[i])
                required_roles.splice(index,1)
                --i
                continue secLoop
            }
        }
    }
   needed_employees = []
    if(needed_employees.length) {
        return {
            can_do: false,
            difference: needed_employees
        }
    } else {
        return {
            can_do: true
        }
    }
    */
}

function finishTask(task) {
    console.log("finish")
    console.log(task)
}

function chooseTask(task, add) {
    if(add) {
        state_company.performed_tasks[task.code_name] = task
        task.active = true
        /*
        let check_result = checkTask(state_company.employees, task) 
        if(check_result.can_do) {
            state_company.performed_tasks[task.code_name] = task
            task.active = true
        } else {
            let desc = "Не хватает специалистов: \n"
            check_result.difference.forEach(pos => {
                desc = desc + pos.role + pos.tier + "\n"
            })
            alert(desc)
        }
        */
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
        if(state_company.performed_tasks[task].is_performed) {
            ++state_company.performed_tasks[task].progress
            if(state_company.performed_tasks[task].progress == state_company.performed_tasks[task].time) {
                finishTask(task)
            }
        }
    }
}

export default function() {
    return {
        getTasks,
        chooseTask,
        getPerformedTasks,
        doTasks,
        checkTasks,
    }
}