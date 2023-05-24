const removeFromArray = function() {
    const args = Array.from(arguments)
    const nums = args[0];

    return nums.filter(checkRemove)

    function checkRemove(num){
        for (let i=1; i<args.length; i++){
            if (num === args[i]) return false
        }
        return true;
    }

};

// Do not edit below this line
module.exports = removeFromArray;
