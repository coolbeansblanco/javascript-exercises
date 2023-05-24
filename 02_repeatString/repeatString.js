const repeatString = function(text, reps) {
    if (reps<0 ) return "ERROR";
    let repeatText = "";
    for (let i=0; i<reps; i++){
        repeatText += text;
    }
    return repeatText;
};

// Do not edit below this line
module.exports = repeatString;
