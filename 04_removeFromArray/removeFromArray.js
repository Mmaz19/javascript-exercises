const removeFromArray = function(arr, par) {
    let newArr=[]; 
    for ( let i= 0; i < arr.length; i++){
        if (arr[i] !== par){
            newArr.push(i);
        }

    }
    return newArr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
