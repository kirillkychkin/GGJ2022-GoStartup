import { reactive } from "vue"

const offices = {
    garage: {
        expenses: 2500,
        name: "Гараж",
        size: 5,
    },
    coworking: {
        expenses: 16500,
        name: "Коворкинг",
        size: 11,
    },
    openspace: {
        expenses: 105000,
        name: "Опенспейс",
        size: 21,
    },
}

const state_office = reactive({
    curr_office: "garage",
    show: false,
})

export default function() {
    return {
        state_office,
        offices,
    }
}
