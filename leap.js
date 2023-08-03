
function findOdd(arr){

    const oddnum = []
for(let i =0; i<arr.length; i++){
    const index = i;
    const element = arr[index];
    if (element%2 !== 0){
        oddnum.push(element)
    }
}
return oddnum; 
}

function sumodd(oddArray){
let sum = 0;
for(let i =0; i<oddArray.length; i++){
    const index = i;
    const element = oddArray[index]
    sum = sum+element;
}
return sum

}




const thenum= [50, 55, 65, 70, 80, 105, 45, 77, 90]
const oddnums = findOdd(thenum)
const sumOddTotal = sumodd(oddnums)

console.log(sumOddTotal);

