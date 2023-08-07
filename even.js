function isLGSeven(num){
    if(typeof num !== "number"){
        return 'Please provide a number'
    }else{
    let differ = num - 7;;
    if(differ<7){
        return differ
    }else{
        return num*2;
    }
    }

}

console.log(isLGSeven(6))