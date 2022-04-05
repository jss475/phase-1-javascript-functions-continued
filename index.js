// code your solution here


function saturdayFun(param = "roller-skate"){
        return `This Saturday, I want to ${param}!`;
}

const mondayWork = function(param = "go to the office"){
        return `This Monday, I will ${param}.`;
}

function wrapAdjective(param = "*"){
    return function(emphatic = "special"){
        return `You are ${param}${emphatic}${param}!`;
    }
}
