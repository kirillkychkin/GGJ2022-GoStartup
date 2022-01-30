import useCompany from '@/composables/company'
const { state_company } = useCompany()

function throwDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateComplexity(defaultComplexity, diff) {
    //1 - гипер легкая, 7 - гипер сложная
    let complexity = defaultComplexity - diff
    if(complexity < 1) {
        complexity = 1
    }
    let dice = throwDice(1,6)
    console.log("dice: " + dice)

    let result = -1
    switch(complexity) {
        case 1:
            if(dice == 1) {
                result = 1
            } else if (dice == 2) {
                result = 2
            } else {
                result = 3
            }
            break
        case 2:
            if(dice == 1) {
                result = 1
            } else if (dice == 2 || dice == 3) {
                result = 2
            } else {
                result = 3
            }
            break
        case 3:
            if(dice == 1) {
                result = 1
            } else if (dice >= 2 && dice <= 4) {
                result = 2
            } else {
                result = 3
            }
            break
        case 4:
            if(dice <= 2) {
                result = 1
            } else if (dice >= 3 && dice <= 4) {
                result = 2
            } else {
                result = 3
            }
            break
        case 5:
            if(dice == 2) {
                result = 1
            } else if (dice >= 2 && dice <= 5) {
                result = 2
            } else {
                result = 3
            }
            break
        case 6:
            if(dice <= 3) {
                result = 1
            } else if (dice >= 4 && dice <= 5) {
                result = 2
            } else {
                result = 3
            }
            break
        case 7:
            if(dice <= 4) {
                result = 1
            } else if (dice == 5) {
                result = 2
            } else {
                result = 3
            }
            break
        default:
            alert("Возникла ошибка")
    }
    let text = ""
    switch(result) {
        case 1:
            text = "Задание выполнено плохо! Коэффициент награды 0.7"
            break
        case 2:
            text = "Задание выполнено хорошо! Коэффициент награды 1"
            break
        case 3:
            text = "Задание выполнено отлично! Коэффициент награды 1.3"
            break
    }
    return {
        result: result,
        text: text
    }
}

function applyMultiplier(value, result) {
    switch(result) {
        case 1:
            value = value*0.7
            break
        case 2:
            break
        case 3:
            value = value*1.3
            break
    }
    return value
}

function calculateReward(task,diff) {
    let result = calculateComplexity(task.complexity.num, diff)
    alert(result.text)
    let reward = {...task.reward}
    reward.amount = applyMultiplier(reward.amount, result.result)
    console.log(reward)
    if(reward.type == "clients") {
        state_company.clients += reward.amount
    } else if(reward.type == "income") {
        state_company.balance += reward.amount
    }
    
    delete state_company.performed_tasks[task.code_name]
    task.active = false
    task.progress = 0

    task.required_roles.forEach(role => {
        let emp = task.assigned_employees[role]
        if(emp != "null") {
            emp.assigned_task = "null"
            task.assigned_employees[role] = "null"
        }
    })
}

export default function() {
    return {
        calculateReward,
    }
}