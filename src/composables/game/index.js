import { reactive } from "vue"

import useCompany from '@/composables/company'
const { state_company } = useCompany()

import useTasks from '@/composables/tasks'
const { doTasks, checkTasks } = useTasks()

import useStages from '@/composables/stages'
const { state_stages } = useStages()

const state_game = reactive({
    tick: 0,
    stage: "stage0",
})

function nextTick() {
    if(checkTasks()) {
        ++state_game.tick
        state_company.next_balance()
        doTasks()
    } else {
        let verify = confirm("По некоторым задания не будет прогресса из-за недостаточного количества или квалификации сотрудников. Продолжить?")
        if(verify) {
            ++state_game.tick
            state_company.next_balance()
            doTasks()
        }
    }
    if(state_stages[state_game.stage].objective_amount == state_stages[state_game.stage].objective_progress) {
        if(!state_stages[state_game.stage].compose) {
            state_game.stage = state_stages[state_game.stage].next
            alert("Поздравляем! Новая стадия игры: " + state_stages[state_game.stage].name)
        }
    }
}

export default function() {
    return {
        state_game,
        nextTick,
    }
}