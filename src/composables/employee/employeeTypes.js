let employee_types = {
    ceo1: {
        salary: 13000,
        tier: 1,
        role: "ceo",
        type: "ceo1",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "ceo2",
            next_tier: 2,
        },
    },
    ceo2: {
        salary: 23000,
        tier: 2,
        role: "ceo",
        type: "ceo2",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "ceo3",
            next_tier: 3,
        },
    },
    ceo3: {
        salary: 36000,
        tier: 3,
        role: "ceo",
        type: "ceo3",
        promotion: {
            cost: 10000,
            can_promote: false,
        },
    },
    marketer1: {
        salary: 10000,
        tier: 1,
        role: "marketer",
        type: "marketer1",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "marketer2",
            next_tier: 2,
        },
    },
    marketer2: {
        salary: 13000,
        tier: 2,
        role: "marketer",
        type: "marketer2",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "marketer3",
            next_tier: 3,
        },
    },
    marketer3: {
        salary: 20000,
        tier: 3,
        role: "marketer",
        type: "marketer3",
        promotion: {
            cost: 10000,
            can_promote: false,
        },
    },
    designer1: {
        salary: 10000,
        tier: 1,
        role: "designer",
        type: "designer1",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "designer2",
            next_tier: 2,
        },
    },
    designer2: {
        salary: 16000,
        tier: 2,
        role: "designer",
        type: "designer2",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "designer3",
            next_tier: 3,
        },
    },
    designer3: {
        salary: 26000,
        tier: 3,
        role: "designer",
        type: "designer3",
        promotion: {
            cost: 10000,
            can_promote: false,
        },
    },
    developer1: {
        salary: 10000,
        tier: 1,
        role: "developer",
        type: "developer1",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "developer2",
            next_tier: 2,
        },
    },
    developer2: {
        salary: 20000,
        tier: 2,
        role: "developer",
        type: "developer2",
        promotion: {
            cost: 10000,
            can_promote: true,
            next_type: "developer3",
            next_tier: 3,
        },
    },
    developer3: {
        salary: 33000,
        tier: 3,
        role: "developer",
        type: "developer3",
        promotion: {
            cost: 10000,
            can_promote: false,
        },
    },
}

export default function() {
    return {
        employee_types
    }
}