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

function calculateReward(task,diff) {
    let result = calculateComplexity(task.complexity.num, diff)
    alert(result.text)
    console.log(task, diff)
    console.log("reward")
}

export default function() {
    return {
        calculateReward,
    }
}