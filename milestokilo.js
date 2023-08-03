function getsum(numbers){
   let sum = 0;
    for(let i =0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum+element
    }
    return sum

}


function getOddNumbers(numbers){
 const oddNumber = []
    for(let i =0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            oddNumber.push(element)
        }
    }
    return oddNumber
}



const mynumber= [13, 65, 40, 55, 80, 94, 99]
const getodd =getOddNumbers(mynumber);
const totalsum=getsum(getodd);
console.log(totalsum)
// console.log(getodd);
