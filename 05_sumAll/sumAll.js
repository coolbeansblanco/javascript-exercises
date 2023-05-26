const sumAll = function(startInt, endInt) {
    if (
        !Number.isInteger(startInt) ||
        !Number.isInteger(endInt) ||
        startInt < 0 ||
        endInt < 0
    )
        return "ERROR";
    
    if (endInt < startInt){
        let temp = startInt;
        startInt = endInt;
        endInt = temp;
    }
    
    let sum =0;
    while (startInt <= endInt){
        sum += startInt;
        startInt++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
