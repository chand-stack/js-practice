 function findLeapYear(arr){
const theLeapYear = [];

for (let i = 0; i<arr.length; i++){
    let element = arr[i];
    if(element%4===0){
        theLeapYear.push(element);
    }
}
return theLeapYear

 }

 let yearArr= [2023, 2024, 2025, 2028, 2030];

 let leapYear = findLeapYear(yearArr);
 console.log(leapYear);