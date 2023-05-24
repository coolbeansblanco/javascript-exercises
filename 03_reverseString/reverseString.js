const reverseString = function(string) {
    let newString = "";

    for (let i=string.length-1; i>-1; i--){
        newString += string.substring(i,i+1);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
