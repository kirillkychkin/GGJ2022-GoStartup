import { reactive } from "vue"

const state_stages = reactive({
    stage0: {
        name: "Подготовка",
        objective_name: "Выполнить 2 таска",
        objective_amount: 2,
        objective_progress: 0,
        objective_type: "task",
        next: "stage1",
        compose: false,
    },
    stage1: {
        name: "Исследование",
        objective_name: "Поднять капитализацию до 30 000 000 и выполнить 3 основных задания",
        objective_amount: 30000000,
        objective_progress: 0,
        objective_type: "capitalization",
        objective_another_type: "task",
        objective_another_amount: 3,
        objective_another_progress: 0,
        compose: true,
    },
    stage2: {
        name: "Исследование",
        objective_name: "Выполнить 2 таска",
        objective_amount: 2,
        objective_progress: 0,
        objective_type: "task"
    },
})


export default function() {
    return {
        state_stages,
    }
}
