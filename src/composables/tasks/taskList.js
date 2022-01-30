import { reactive } from "vue"

let task_list = reactive({
    stage0: {
        task1: {
            code_name: "task1",
            stage: "stage0",
            name: 'some task',
            type: 'major',
            desc: 'описание задания 1',
            time: 2,
            progress: 0,
            additional_expenses: 0,
            is_performed: true,
            required_roles: [
                "ceo1",
                "designer2",
            ],
            assigned_employees: {
                ceo1: "null",
                designer2: "null",
            },
            complexity: {
                num: 3,
                text: "Средняя легкость",
            },
            reward: {
                type: "clients",
                amount: 5,
            },
            id: 0,
            active: false,
        },
        task2: {
            code_name: "task2",
            stage: "stage0",
            name: 'some other task',
            type: 'side',
            desc: 'описание задания 2',
            time: 3,
            progress: 0,
            additional_expenses: 500,
            is_performed: true,
            required_roles: [
                "marketer1",
                "designer1",
                "developer2",
            ],
            assigned_employees: {
                marketer1: "null",
                designer1: "null",
                designer2: "null",
            },
            complexity: {
                num: 6,
                text: "Сложная",
            },
            reward: {
                type: "income",
                amount: 5000,
            },
            id: 1,
            active: false,
        },
    },
    stage1: {
        
    }
})

export default function() {
    return {
        task_list
    }
}