/// string manipulation

const stringManipulation ={
    getInUpperCase : (myStringArray)=>{
        let newArray = [];

        for (const data of myStringArray){
            newArray.push(data.toUpperCase());
        }
        return newArray;
    },
    getInLowerCase : (myStringArray) =>{
        let newArray =[];

        for (const data of myStringArray){
            newArray.push(data.toLowerCase());
        }
        return newArray;
    },
    getIndexPosition :(myStringArray, element)=>{
        return myStringArray.indexOf(element);
    }
}

module.exports = stringManipulation;