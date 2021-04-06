
//function with default paramater value is roller-skate
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}


//function expression 
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};


//function that's parameters can be used within anonymous function 
function wrapAdjective(flair = "*") {
    //return a function with default parameter special
    return function(text = 'special') {
        return `You are ${flair}${text}${flair}!`;
    }
}