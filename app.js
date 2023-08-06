

function make_avg(arr,size){

  let sum = 0;
  for(let i=0; i<size; i++){
    let element = arr[i]
    sum = sum+element;
  }
  let avg = sum/size;
  return avg


}







let markArray = [65, 60, 75, 50, 55, 40 ,80, 100];
let marksize = markArray.length;

const totalAvg = make_avg(markArray,marksize);
console.log(totalAvg);

