function gemsToDiamond(x,y,z){
if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
    return 'please provide us a number'
}
    let xgemsPower = 21;
    let ygemsPower = 32;
    let zgemsPower = 43;
    let totalGems = (xgemsPower*x)+(ygemsPower*y)+(zgemsPower*z)

    if(totalGems>2000){
        return totalGems - 2000;
    }
    else{
        return totalGems
    }
    
   

}

const output = gemsToDiamond(100,5,1);
console.log(output);