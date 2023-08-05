function lowestNum(arr){
 let number = 0;

 for(let i=0; i<arr.length; i++){
    const index = i;
    const element = arr[index]
    if (element==Math.min(...arr)){
        number=element
    }
 }
 return number;
}


const num= [167, 190, 120, 165, 137]

const lownum = lowestNum(num)
console.log(lownum);