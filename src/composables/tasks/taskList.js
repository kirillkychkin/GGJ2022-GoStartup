import { reactive } from "vue"

let task_list = reactive({
    stage0: {
        task1: {
            code_name: "task1",
            name: 'some task',
            type: 'major',
            desc: 'описание задания 1',
            time: 2,
            progress: 0,
            additional_expenses: 0,
            required_roles: [
                "ceo1",
                "designer2",
            ],
            complexity: 1,
            reward: {
                type: "clients",
                amount: 5,
            },
            id: 0,
            active: false,
        },
        task2: {
            code_name: "task2",
            name: 'some other task',
            type: 'side',
            desc: 'описание задания 2',
            time: 3,
            progress: 0,
            additional_expenses: 500,
            required_roles: [
                "marketer1",
                "designer1",
                "developer2",
            ],
            complexity: 2,
            reward: {
                type: "income",
                amount: 5000,
            },
            id: 1,
            active: false,
        },
    }
})

export default function() {
    return {
        task_list
    }
}