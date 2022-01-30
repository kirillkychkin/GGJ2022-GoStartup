import { reactive } from "vue"
import taskList from '@/composables/tasks/taskList'

const { task_list } = taskList()

const state_choose = reactive({
    show: false,
    role: "",
    task_initiator: "",
    task: "",
    stage: "",
    assigned: "",
})

function pickEmployee(emp) {

    if(emp.assigned_task == "null") {
        emp.assigned_task = state_choose.task_initiator

        state_choose.stage = state_choose.task.stage
        state_choose.assigned = state_choose.role

        task_list[state_choose.task.stage][state_choose.task.code_name].assigned_employees[state_choose.role] = emp
    } else {
        let verify = confirm("Сотрудник уже в другом слоте. Перетащить его сюда?")
        if(verify) {  
            let old_task = emp.assigned_task
            task_list[state_choose.stage][old_task].assigned_employees[state_choose.assigned] = "null"

            emp.assigned_task = state_choose.task_initiator
            task_list[state_choose.task.stage][state_choose.task.code_name].assigned_employees[state_choose.role] = emp

            state_choose.stage = state_choose.task.stage
            state_choose.assigned = state_choose.role
            console.log(emp)
        } else {
            console.log("Ну и иди лесом")
        }
    }

    state_choose.show = false
}

export default function() {
    return {
        state_choose,
        pickEmployee,
    }
}