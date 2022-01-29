import { reactive } from "vue"
import taskList from '@/composables/tasks/taskList'

const { task_list } = taskList()

const state_choose = reactive({
    show: false,
    role: "",
    task_initiator: "",
    task: "",
})

function pickEmployee(emp) {
    if(emp.assigned_task == "null") {
        emp.assigned_task = state_choose.task_initiator
        task_list[state_choose.task.stage][state_choose.task.code_name].assigned_employees[state_choose.role] = emp
        console.log(emp)
    } else {
        /*
        let verify = confirm("Сотрудник уже в другом слоте?")
        if(verify) {

        } else {

        }
        */
    }
}

export default function() {
    return {
        state_choose,
        pickEmployee,
    }
}