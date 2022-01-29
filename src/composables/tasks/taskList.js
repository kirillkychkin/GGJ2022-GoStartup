let task_list = {
    stage0: {
        task1: {
            name: 'some task',
            type: 'major',
            desc: 'описание задания 1',
            time: 2,
            progress: 0,
            additional_expenses: 0,
            required_roles: [
                "ceo",
                "designer2",
            ],
            complexity: 1,
            reward: {
                type: "clients",
                amount: 5,
            },
        },
        task2: {
            name: 'some other task',
            type: 'side',
            desc: 'описание задания 2',
            time: 3,
            progress: 0,
            additional_expenses: 500,
            required_roles: [
                "marketer1",
                "designer1",
                "developer2",
            ],
            complexity: 2,
            reward: {
                type: "income",
                amount: 5000,
            },
        },
    }
}

export default function() {
    return {
        task_list
    }
}