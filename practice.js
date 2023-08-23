let oddArray = [1,3,5,7,9]

const evenArray = [];

for(const num of oddArray){
   let numEven = num+1
   evenArray.push(numEven);
}

console.log(evenArray)