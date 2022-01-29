import { reactive } from "vue"

const state_game = reactive({
    tick: 0,
    stage: 0,
})



export default function() {
    return {
        state_game
    }
}