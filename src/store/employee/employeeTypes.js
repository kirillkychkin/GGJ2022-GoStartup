let employee_types = {
    ceo: {
        salary: 1000,
        type: "ceo",
        tier: 1,
    },
    marketer1: {
        salary: 500,
        tier: 1,
        type: "marketer",
    },
    marketer2: {
        salary: 600,
        tier: 2,
        type: "marketer",
    },
    marketer3: {
        salary: 700,
        tier: 3,
        type: "marketer",
    },
    designer1: {
        salary: 500,
        tier: 1,
        type: "designer",
    },
    designer2: {
        salary: 600,
        tier: 2,
        type: "designer",
    },
    designer3: {
        salary: 700,
        tier: 3,
        type: "designer",
    },
    developer1: {
        salary: 500,
        tier: 1,
        type: "developer",
    },
    developer2: {
        salary: 600,
        tier: 2,
        type: "developer",
    },
    developer3: {
        salary: 700,
        tier: 3,
        type: "developer",
    },
}

export default function() {
    return {
        employee_types
    }
}