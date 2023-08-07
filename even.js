function findingBadData(numArray){

    if(Array.isArray(numArray)===false ){
        return 'please enter an Array'
    }
    else{
        let badData = 0;
        for(let i = 0; i<numArray.length; i++){
            let elements = numArray[i];
            if(typeof elements !== "number"){
                return 'please enter an Array of numbers'
            }
            else if(elements<0){
                badData++;
            }
            
        }return badData;
    }

}


console.log(findingBadData([2,-5,-7,-23, -5, -8]))