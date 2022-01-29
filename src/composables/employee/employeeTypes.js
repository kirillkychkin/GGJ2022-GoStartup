let employee_types = {
    ceo: {
        salary: 1000,
        type: "ceo",
        tier: 1,
    },
    marketer1: {
        salary: 500,
        tier: 1,
        type: "marketer tier 1",
    },
    marketer2: {
        salary: 600,
        tier: 2,
        type: "marketer tier 2",
    },
    marketer3: {
        salary: 700,
        tier: 3,
        type: "marketer tier 3",
    },
    designer1: {
        salary: 500,
        tier: 1,
        type: "designer tier 1",
    },
    designer2: {
        salary: 600,
        tier: 2,
        type: "designer tier 2",
    },
    designer3: {
        salary: 700,
        tier: 3,
        type: "designer tier 3",
    },
    developer1: {
        salary: 500,
        tier: 1,
        type: "developer tier 1",
    },
    developer2: {
        salary: 600,
        tier: 2,
        type: "developer tier 2",
    },
    developer3: {
        salary: 700,
        tier: 3,
        type: "developer tier 3",
    },
}

export default function() {
    return {
        employee_types
    }
}