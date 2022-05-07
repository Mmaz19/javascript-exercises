const sumAll = function(min, max) {
    let sum = 0;
    if (Number.isInteger(min) === false || Number.isInteger(max) === false){ return "ERROR"}
    if (Number.isNaN(min)|| Number.isNaN(max)) { return "ERROR"}
    if (min <0 || max <0){ return "ERROR"}
    if(max<min){
        let temp = max;
        max = min;
        min = temp;
    }
    for(let i = min; i<=max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
