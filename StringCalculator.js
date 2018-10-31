function add (numbers){
    if(numbers == "")
    return 0;

    if(numbers.includes(","))
    {
        
        var numberArray = numbers.replace(/\n/g, ",").split(",")

        return sum(numberArray);
    }
    if(numbers.startsWith("//")){
        var delimiter = numbers [2];
        numbers = numbers.substring(4)
        numberArray = numbers.split(delimiter);

        return sum(numberArray);
    }

    else
        return parseInt(numbers);
}


function sum(numberArray){
    var total = 0;
    var negativeNumberArray = [];

for(var i=0 ; i < numberArray.length ; i++){
     if(numberArray[i] < 0){
         negativeNumberArray.push(numberArray[i]);
     }
}
if(negativeNumberArray.length > 0){
    return "Negatives not allowed: " + negativeNumberArray;
}
    else
    for(var i=0 ; i < numberArray.length ; i++){
        if(numberArray[i] > 1000){
            continue;
        }
    total += parseInt(numberArray[i]);
    }
return total;
}

module.exports = add;