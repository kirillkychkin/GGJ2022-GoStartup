let employee_types = {
    ceo: {
        salary: 1000,
        type: "ceo",
        tier: 1,
    },
    marketer1: {
        salary: 7500,
        tier: 1,
        type: "marketer1",
    },
    marketer2: {
        salary: 600,
        tier: 2,
        type: "marketer2",
    },
    marketer3: {
        salary: 700,
        tier: 3,
        type: "marketer3",
    },
    designer1: {
        salary: 500,
        tier: 1,
        type: "designer1",
    },
    designer2: {
        salary: 600,
        tier: 2,
        type: "designer2",
    },
    designer3: {
        salary: 700,
        tier: 3,
        type: "designer3",
    },
    developer1: {
        salary: 500,
        tier: 1,
        type: "developer1",
    },
    developer2: {
        salary: 600,
        tier: 2,
        type: "developer2",
    },
    developer3: {
        salary: 700,
        tier: 3,
        type: "developer3",
    },
}

export default function() {
    return {
        employee_types
    }
}