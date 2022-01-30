import { reactive } from "vue"

const offices = {
    garage: {
        expenses: 10000,
        name: "Гараж",
        size: 5,
    },
    coworking: {
        expenses: 70000,
        name: "Коворкинг",
        size: 11,
    },
    openspace: {
        expenses: 270000,
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
