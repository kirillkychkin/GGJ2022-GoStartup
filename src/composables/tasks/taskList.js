import { reactive } from "vue"

let task_list = reactive({
    stage0: {
        task1: {
            code_name: "task1",
            stage: "stage0",
            name: 'Подготовить презентацию стартапа',
            type: 'major',
            desc: 'описание задания 1',
            time: 1,
            progress: 0,
            additional_expenses: 1000,
            is_performed: true,
            required_roles: [
                "ceo1",
            ],
            assigned_employees: {
                ceo1: "null",
            },
            complexity: {
                num: 1,
                text: "Гипер легкая",
            },
            reward: {
                type: "none",
                amount: 0,
            },
            id: 0,
            active: false,
        },
        task2: {
            code_name: "task2",
            stage: "stage0",
            name: 'Привлечь первые инвестиции FFF ',
            type: 'major',
            desc: 'описание задания 2',
            time: 1,
            progress: 0,
            additional_expenses: 1000,
            is_performed: true,
            required_roles: [
                "ceo1",
            ],
            assigned_employees: {
                ceo1: "null",
            },
            complexity: {
                num: 4,
                text: "Средняя",
            },
            reward: {
                type: "investments",
                amount: 200000,
                share_change: 5,
            },
            id: 1,
            active: false,
        },
    },
    stage1: {
        task3: {
            code_name: "task3",
            stage: "stage1",
            name: 'Разработать фирменный стиль',
            type: 'major',
            desc: 'описание задания 1',
            time: 2,
            progress: 0,
            additional_expenses: 7500,
            is_performed: true,
            required_roles: [
                "ceo1",
                "marketer1",
                "designer1",
            ],
            assigned_employees: {
                ceo1: "null",
                marketer1: "null",
                designer1: "null",
            },
            complexity: {
                num: 4,
                text: "Средняя",
            },
            reward: {
                type: "capitilize",
                amount: 300000,
            },
            id: 2,
            active: false,
        },
        task4: {
            code_name: "task4",
            stage: "stage1",
            name: 'Отправить заявку на участие в Акселераторе В69 и привлечь Pre-Seed инвестиции',
            type: 'major',
            desc: 'описание задания 1',
            time: 3,
            progress: 0,
            additional_expenses: 4000,
            is_performed: true,
            required_roles: [
                "ceo1",
                "marketer1",
                "designer1",
                "developer1",
            ],
            assigned_employees: {
                ceo1: "null",
                marketer1: "null",
                designer1: "null",
                developer1: "null",
            },
            complexity: {
                num: 4,
                text: "Средняя",
            },
            reward: {
                type: "capitilize",
                amount: 300000,
            },
            id: 3,
            active: false,
        },
    }
})

export default function() {
    return {
        task_list
    }
}