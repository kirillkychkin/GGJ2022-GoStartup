let employee_types = {
    ceo1: {
        salary: 1000,
        tier: 1,
        role: "ceo",
        type: "ceo1",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "ceo2",
            next_tier: 2,
        },
    },
    ceo2: {
        salary: 1100,
        tier: 2,
        role: "ceo",
        type: "ceo2",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "ceo3",
            next_tier: 3,
        },
    },
    ceo3: {
        salary: 1200,
        tier: 3,
        role: "ceo",
        type: "ceo3",
        promotion: {
            cost: 1000,
            can_promote: false,
        },
    },
    marketer1: {
        salary: 500,
        tier: 1,
        role: "marketer",
        type: "marketer1",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "marketer2",
            next_tier: 2,
        },
    },
    marketer2: {
        salary: 600,
        tier: 2,
        role: "marketer",
        type: "marketer2",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "marketer3",
            next_tier: 3,
        },
    },
    marketer3: {
        salary: 700,
        tier: 3,
        role: "marketer",
        type: "marketer3",
        promotion: {
            cost: 1000,
            can_promote: false,
        },
    },
    designer1: {
        salary: 500,
        tier: 1,
        role: "designer",
        type: "designer1",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "designer2",
            next_tier: 2,
        },
    },
    designer2: {
        salary: 600,
        tier: 2,
        role: "designer",
        type: "designer2",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "designer3",
            next_tier: 3,
        },
    },
    designer3: {
        salary: 700,
        tier: 3,
        role: "designer",
        type: "designer3",
        promotion: {
            cost: 1000,
            can_promote: false,
        },
    },
    developer1: {
        salary: 500,
        tier: 1,
        role: "developer",
        type: "developer1",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "developer2",
            next_tier: 2,
        },
    },
    developer2: {
        salary: 600,
        tier: 2,
        role: "developer",
        type: "developer2",
        promotion: {
            cost: 1000,
            can_promote: true,
            next_type: "developer3",
            next_tier: 3,
        },
    },
    developer3: {
        salary: 700,
        tier: 3,
        role: "developer",
        type: "developer3",
        promotion: {
            cost: 1000,
            can_promote: false,
        },
    },
}

export default function() {
    return {
        employee_types
    }
}