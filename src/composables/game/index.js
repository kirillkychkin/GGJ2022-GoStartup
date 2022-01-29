import { reactive } from "vue"

import useCompany from '@/composables/company'
const { state_company } = useCompany()

import useTasks from '@/composables/tasks'
const { doTasks } = useTasks()

const state_game = reactive({
    tick: 0,
    stage: 0,
})

function nextTick() {
    ++state_game.tick
    state_company.next_balance()
    doTasks()
}

export default function() {
    return {
        state_game,
        nextTick,
    }
}