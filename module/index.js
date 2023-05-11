const util = require('./utils')

var myStringArray =['jhoN', 'Jenny','Ben', 'whiTe']

function getCapital(myStringArray){
    return util.getInUpperCase(myStringArray);
}

console.log(getCapital(myStringArray))

function getLower(myStringArray){
    return util.getInLowerCase(myStringArray)
}

console.log(getLower(myStringArray))

function getPosition(myStringArray, element){
    return util.getIndexPosition(myStringArray,element)
}

console.log(getPosition(myStringArray, 'Jenny'))