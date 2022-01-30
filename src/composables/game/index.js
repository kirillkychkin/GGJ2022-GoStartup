import { reactive } from "vue"

import useCompany from '@/composables/company'
const { state_company } = useCompany()

import useTasks from '@/composables/tasks'
const { doTasks, checkTasks } = useTasks()

const state_game = reactive({
    tick: 0,
    stage: 0,
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
}

export default function() {
    return {
        state_game,
        nextTick,
    }
}