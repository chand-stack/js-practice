function onlypositive(numberArr){
  const positive=[]

  for(let i = 0; i<numberArr.length; i++){
    const element = numberArr[i];
    if(element>=0){
        positive.push(element);
    }else if(element<0){
        break;
    }
  }
  return positive;
}



const numArr = [45, 87, 96, 11, 63, -56, 71, 28];

const positiveArr = onlypositive(numArr);
console.log(positiveArr);

