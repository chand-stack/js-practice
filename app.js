
function uniquename(arr){
    const uniqArray=[];

    for(let i = 0; i<arr.length; i++){
        const element= arr[i];
        if(uniqArray.includes(element)===false){
            uniqArray.push(element);
        }
    }
return uniqArray;

}

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul']
const result = uniquename(names);
console.log(result);